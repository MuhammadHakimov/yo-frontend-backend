import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationCode = async (email, code) => {
  await transporter.sendMail({
    from: `"Ё-барномасоз" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Коди тасдиқи email",
    text: `Коди тасдиқи шумо: ${code}. Код 5 дақиқа эътибор дорад.`,
  });
};