import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Brevo — отправка через HTTPS API (хостинги вроде Railway блокируют SMTP).
// Если BREVO_API_KEY не задан, письмо уходит через Gmail, как раньше.
const sendWithBrevo = async ({ to, subject, text }) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Ё-барномасоз",
        email: process.env.BREVO_SENDER_EMAIL || process.env.EMAIL_USER,
      },
      to: [{ email: to }],
      subject,
      textContent: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Brevo error ${response.status}: ${await response.text()}`);
  }
};

export const sendVerificationCode = async (email, code) => {
  const message = {
    to: email,
    subject: "Коди тасдиқи email",
    text: `Коди тасдиқи шумо: ${code}. Код 5 дақиқа эътибор дорад.`,
  };

  if (process.env.BREVO_API_KEY) {
    await sendWithBrevo(message);
    return;
  }

  await transporter.sendMail({
    from: `"Ё-барномасоз" <${process.env.EMAIL_USER}>`,
    ...message,
  });
};
