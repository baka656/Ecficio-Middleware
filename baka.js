const exp=require('express');
const app=exp();
const path=require('path');
var fs = require('fs');
var pdf = require("pdf-creator-node");
// Read HTML Template
var htmlToPDF = fs.readFileSync('./views/pdf.html','utf8');
var options = {
    format: "A4",
    orientation: "portrait",
    border: "3mm"
};
var document = {
    html: htmlToPDF,
    data: {
        name: 'req.body.name',
        receipt: 'count',
        clg: 'req.body.college',
        rollno: 'req.body.rollno',
        date: 'req.body.timestamp',
    },
    path: "./output.pdf"
};
pdf.create(document, options).then(res => {
    console.log(res);        
}).catch(error => {
    console.log(error);
});