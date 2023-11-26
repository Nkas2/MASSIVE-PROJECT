import nodemailer from "nodemailer";

export const sendEmail = async (emailUser, resetToken) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "bagsblood48@gmail.com",
      pass: "boxu ccgp mkvj jaii",
    },
  });

  const mailOptions = {
    from: "bagsblood48@gmail.com",
    to: emailUser,
    subject: "Reset Password",
    text: `Halo,\n\nAnda menerima email ini karena kami menerima permintaan reset password. Token reset password Anda adalah: ${resetToken}\n\nJika Anda tidak melakukan permintaan ini, abaikan email ini.\n`,
    html: `<p>Halo,</p><p>Anda menerima email ini karena kami menerima permintaan reset password. Token reset password Anda adalah: <strong>${resetToken}</strong></p><p>Jika Anda tidak melakukan permintaan ini, abaikan email ini.</p>`,
  };

  await transport.sendMail(mailOptions);
};
