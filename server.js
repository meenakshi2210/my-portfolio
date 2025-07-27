const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);  // ✅ fix is here

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Message from ${name}`,
      text: message,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
