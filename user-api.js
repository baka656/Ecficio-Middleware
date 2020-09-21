const exp=require('express');
const testRouter=exp.Router();
var QRCode = require('qrcode');
const emailExistence=require('email-existence');
const nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');
var pdf = require("pdf-creator-node");
const { resolveSoa } = require('dns');
// Read HTML Template
var htmlToPDF = fs.readFileSync('./views/pdf.html','utf8');
ObjectId = require('mongodb').ObjectID;

    //key_id: '',
    //key_secret: ''
razor_key = '';
//razor_key = '';
//razorpay
let Razorpay=require('razorpay');
const RazorpayConfig={
    key_id: '',
    key_secret: ''
}

testRouter.use(exp.json());
testRouter.post('/razorpayOrder',(req,res,next)=>{
    var razorinstance=new Razorpay(RazorpayConfig);
    var options = {
        amount: 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "",
        payment_capture: '1'
      };
    razorinstance.orders.create(options,function(razor_error, order){
        if(razor_error){
            console.log(razor_error);
            res.send({message: 'error'});
        }
        else{
            console.log(order);
            res.send({message: 'success',order: order,key: razor_key,amount: options.amount});
        }
    });
});

//mail necessity
var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
        }
        else {
            callback(null, html);
        }
    });
};
smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'abbhinav.nomulla656@gmail.com',
        pass: 'ittopbaka'
    },
    tls: {
        rejectUnauthorized: false
    }
}));

//getting pass
testRouter.use(exp.json());
testRouter.post('/getPass',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('receipt').findOne(req.body,(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.send({message:'success',data:obj.pass});
        }
    });
});

//updating round1 marks
testRouter.use(exp.json());
testRouter.post('/updateMarks1',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection(req.body.eventname).updateOne({receipt: req.body.receipt},{$set: {r1marks: req.body.r1marks}},(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.send({message:'success'});
        }
    });
});

//updating round2 marks
testRouter.use(exp.json());
testRouter.post('/updateMarks2',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection(req.body.eventname).updateOne({receipt: req.body.receipt},{$set: {r2marks: req.body.r2marks}},(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.send({message:'success'});
        }
    });
});

//retrieving all users data
testRouter.use(exp.json());
testRouter.post('/getUsers',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('participants').find({}).toArray((err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.send({message:'success',data:obj});
        }
    });
});

//retrieving particular user data
testRouter.use(exp.json());
testRouter.post('/getUser',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('participants').findOne(req.body,(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else if(obj==null){
            res.send({message: 'donot exist'});
        }
        else{
            res.send({message:'success',data:obj});
        }
    });
});


//retrieving event registered data
testRouter.use(exp.json());
testRouter.post('/getRegEvent',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection(req.body.eventname).find({}).toArray((err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.send({message:'success',data:obj});
        }
    });
});


//registering user round1
testRouter.use(exp.json());
testRouter.post('/scanUser1',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('participants').findOne({receipt: req.body.receipt},(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else if(obj==null){
            res.send({message: 'not in participants'});
        }
        else{
            req.body.name=obj.name;
            req.body.college=obj.college;
            req.body.phone=obj.phone;
            req.body.rollno=obj.rollno;
            req.body.email=obj.email;
            dbo.collection(req.body.eventname).findOne({receipt: req.body.receipt},(error,baka)=>{
                if(error){
                    console.log(error);
                    next(error);
                }
                else if(baka==null){
                    dbo.collection(req.body.eventname).insertOne(req.body,(er,sucess)=>{
                        if(er){
                            console.log(er);
                            next(er);
                        }
                        else{
                            res.send({message: 'success',data: obj.name});
                        }
                    });
                }
                else{
                    res.send({message: 'already registered'});
                }
            });
        }
    });
});

//registering user round2
testRouter.use(exp.json());
testRouter.post('/scanUser2',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection(req.body.eventname).findOne({receipt: req.body.receipt},(err,obj)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else if(obj==null){
            res.send({message: 'not participated in round1'});
        }
        else{
            if(obj.r2marks!==-1){
                res.send({message: 'already registered'});
            }
            else
                res.send({message: 'success',data: obj.name});
        }
    });
});

//retrieving all events data
testRouter.use(exp.json());
testRouter.post('/getEvents',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('events').find({}).toArray((err,obj)=>{
        if(err) 
         console.log(err);
        else
        {
            res.send({message:"success",data:obj});
        }
    });
});

//retrieving single event data
testRouter.use(exp.json());
testRouter.post('/getEvent',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('events').findOne(req.body,(err,obj)=>{
        if(err) 
         console.log(err);
        else if(obj==null){
            res.send({message:"not found"});
        }
        else
        {
            res.send({message:"success",data:obj});
        }
    });
});

//to get count of total events and a particular event
testRouter.use(exp.json());
testRouter.post('/getCount',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    console.log("ti");
    var tp=0;
    var ap=0;
    dbo.collection('participants').countDocuments({},{},(err,count)=>{
        if(err){
         console.log(err);
         next(err);
        }
        else
        {
            tp=count;
            console.log(tp);
            dbo.collection(req.body.eventname).countDocuments({},{},(err,count)=>{
                if(err){
                 console.log(err);
                 next(err);
                }
                else
                {
                    ap=count;
                    console.log(ap);
                    res.send({message: "success",tp: tp,ap: ap});
                }
            });
        }
    });
    
});

//to check whether the mail exists or not
testRouter.use(exp.json());
testRouter.post('/validEmail',(req,res,next)=>{
    emailExistence.check(req.body.email, function(error,response){
        console.log(response);
        res.send(response);
	});
});

//to register the online registered user
testRouter.use(exp.json());
testRouter.post('/addUser',(req,res,next)=>{
    let dbo=req.app.locals.dbObject.db('ecficio');
    dbo.collection('receipt').findOne({name:"baka"},(err,obj)=>{
        if(err) {
         console.log(err);
         next(err);
        }
        else if(obj==null){
            res.send({message:"not found"});
        }
        else
        {
            var count=obj.no;
            var qrbaka;
            req.body.receipt=count;
            var qrittop=count.toString().replace(/\s/g,"")+" "+req.body.name.replace(/\s/g,"")+" "+
                req.body.college.replace(/\s/g,"")+" "+req.body.phone.toString().replace(/\s/g,"")+" "+
                req.body.rollno.replace(/\s/g,"")+" "+req.body.email.replace(/\s/g,"");
            QRCode.toDataURL(qrittop, { errorCorrectionLevel: 'H' }, function (err, url) {
                qrbaka=url;
            });
            dbo.collection('participants').findOne({email:req.body.email},(errr,objj)=>{
                if(errr){
                    console.log(errr);
                    next(errr);
                }
                else if(objj==null){
                    
                    dbo.collection('participants').insertOne(req.body,(errrr,suc)=>{
                        if(errrr){
                            console.log(errrr);
                            next(errrr);
                        }
                        else{
                            count=count+1;
                            dbo.collection('receipt').updateOne({name: "baka"},{$set: {no:count}},(error,success)=>{
                                if(error){
                                    console.log(error);
                                    next(error);
                                }
                                else{
                                    count=count-1;
                                    var options = {
                                        format: "A4",
                                        orientation: "portrait",
                                        border: "3mm"
                                    };
                                    var document = {
                                        html: htmlToPDF,
                                        data: {
                                            name: req.body.name,
                                            receipt: count,
                                            clg: req.body.college,
                                            rollno: req.body.rollno,
                                            date: req.body.timestamp,
                                            tid: req.body.tid
                                        },
                                        path: "./users_pdf/"+count+"_"+req.body.name+".pdf"
                                    };
                                    pdf.create(document, options).then(ress => {
                                        console.log(ress);
                                        readHTMLFile(__dirname + '/views/registration.html', function(err, html) {
                                            var template1 = handlebars.compile(html);
                                            var replacements = {
                                                receipt: count,
                                                name: req.body.name
                                            }
                                            var htmlToSend = template1(replacements);
                                            var mailOptions = {
                                                from: '"ecficio" <abbhinav.nomulla656@gmail.com',
                                                to: req.body.email,
                                                cc: 'monadarling858@gmail.com',
                                                bcc:'gowthamsps98@gmail.com',
                                                attachments: [
                                                    {
                                                        filename:'ittop.png',
                                                        path: qrbaka,
                                                        cid: 'baka@ecficio.com'
                                                    },
                                                    {
                                                        filename: count+"_"+req.body.name+".pdf",
                                                        path: "./users_pdf/"+count+"_"+req.body.name+".pdf"
                                                    }
                                                ],
                                                subject: 'Successfully Registered for Ecficio4.0!!',
                                                html : htmlToSend
                                            };
                                            smtpTransport.sendMail(mailOptions, function (error, response) {
                                                if (error) {
                                                    console.log(error);
                                                    res.send({message: 'error'});
                                                }
                                                res.send({message:"success",receipt:count});
                                                console.log('subscription mail sent');
                                            });
                                        });        
                                    }).catch(error => {
                                        console.log(error);
                                        
                                        res.send({message: 'error'});
                                    });
                                    
                                }
                            });
                        }
                    });
                }
                else{
                    res.send({message:'already exists'});
                }
            });
        }
    });
});

//if there is any logical errors in code
testRouter.use((err,req,res,next)=>{
    res.send({message:err.message});
});

module.exports=testRouter;
