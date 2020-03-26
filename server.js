const pdf = require('pdf').pdf;
const fs = require('fs');

var doc = new pdf();
doc.setFontSize(22);

doc.text(20, 10, 'hello, I am PDF.');
doc.text(20, 30, 'i was created using node.js version: ' + process.version);
doc.text(20, 40, 'i can also be created from the browser');

doc.setProperties({
    title: 'A sample document created by pdf.js',
    subject: 'PDFs are kinda cool, i guess',		
    author: 'Marak Squires',
    keywords: 'pdf.js, javascript, Marak, Marak Squires',
    creator: 'pdf.js'
});
doc.addPage();
doc.text(20, 20, 'This is a second page.');

var fileName = "testFile"+new Date().getSeconds()+".pdf";

fs.writeFile(fileName, doc.output(), function(err, data){
    if(err) throw err;
    console.log(fileName +' was created! great success!');
  });
