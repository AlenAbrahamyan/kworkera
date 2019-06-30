const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use('/ggg_files', express.static('ggg_files'));

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gevtest98@gmail.com',
      pass: 'gevor12gevor'
    }
  });
  

app.get('/', (req, res) => {
    res.render('kwork');
  });

  app.post('/', urlencodedParser, (req, res) => {
    
    res.render('kwork', {data: req.body});
    console.log(req.body.m1, req.body.m2, req.body.m3, req.body.m4, req.body.m5, req.body.m6, req.body.m7, req.body.m8, req.body.m9, req.body.m10)

    var mailOptions = {
        from: 'gevtest98@gmail.com',
        to: 'pul.al.art@mail.ru',
        subject: 'New Client',
        html: '<p>' + req.body.m1 + '</p><p>' + req.body.m2 + '</p><p>' + req.body.m3 + '</p><p>' + req.body.m4 + '</p><p>' + req.body.m5 + '</p><p>' + req.body.m6 + '</p><p>' + req.body.m7 + '</p><p>' + req.body.m8 + '</p><p>' + req.body.m9 + '</p><p>' + req.body.m10 + '</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ');
        }
      
      });


  });

  app.listen(process.env.PORT || 3000);