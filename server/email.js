const nodemailer = require('nodemailer')

module.exports = {

    async sendEmail(toEmailAddress, giftInfo) {

        var fromEmailAddress = 'madirajupriyanka@gmail.com';
      
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: fromEmailAddress,
              pass: 'MyGoogle$7'
            }
          });
      
          var messageString = "FirstName : " + giftInfo.FirstName + ";" + "Email :" + giftInfo.Email + ";" + "Ocassion :" + giftInfo.Ocassion + ";" + "Relation:" + giftInfo.Relation + ";" +  "Others:" + giftInfo.Others + ";";

          var mailOptions = {
            from: fromEmailAddress,
            to: toEmailAddress,
            subject: 'New Gift Request',
            text: messageString
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
      }
}