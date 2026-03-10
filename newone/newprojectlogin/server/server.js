import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

// 👇 Import the helper for Google reCAPTCHA verification
import { createAssessment } from "./routes/verifyRecaptcha.js";

// Auth routes
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// ✅ Initialize Express App
const app = express();

/* ---------------------- 🔹 Middleware ---------------------- */
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,
  })
);

/* ---------------------- 🔹 Sessions ---------------------- */
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecretfallbackkey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",
      ttl: 60 * 60 * 24, // 1 day
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);

/* ---------------------- 🔹 Routes ---------------------- */
app.get("/", (req, res) => res.send("✅ Backend running successfully"));
app.use("/api/auth", authRoutes);

/* ---------------------- 🧠 reCAPTCHA Verification ---------------------- */
app.post("/verify-recaptcha", async (req, res) => {
  try {
    const { token } = req.body;

    const score = await createAssessment({
      projectID,
      recaptchaKey,
      token,
      recaptchaAction: "login",
    });

    if (score === null) {
      return res.status(400).json({
        success: false,
        message: "Invalid reCAPTCHA token",
      });
    }

    res.json({ success: true, score });
  } catch (err) {
    console.error("Error verifying reCAPTCHA:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* ---------------------- 🔹 Fashion AI Route ---------------------- */
app.post("/api/fashion-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a fashion or skincare query.",
      });

    const systemPrompt = `
You are a premium fashion & skincare stylist.
ONLY answer:
- Outfit styling + color combinations
- Suit/Shirt/Shoe/Tie matching
- Grooming & skincare advice (no brand names)
Format rules:
• Shirt:
• Shoes:
• Tie:
• Cleanser:
• Moisturizer:
• Sunscreen:
Tone: luxury, minimal, bullet points only. Allowed emojis 👔 👞 🧴.
If question unrelated, reply exactly: "I only assist with fashion & skincare styling."
    `;

    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt + "\nUser: " + prompt }],
        },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.7 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/formal-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a fashion or skincare query.",
      });

    const systemPrompt = `
You are a premium Formalwear Stylist for men & women.

ONLY answer questions related to:
- Suits, blazers, tuxedos, shirts, trousers
- Formal shoes, ties, pocket squares, belts, watches
- Color combinations for formal events
- Office wear, business meetings, interviews, weddings
- Grooming advice (NO product brand names)

STRICT format:
• Suit/Blazer:
• Shirt:
• Trousers:
• Shoes:
• Tie/Pocket Square:
• Accessories:
• Grooming:

Tone: ultra-luxury, minimal, professional. Bullet points only. Allowed emojis: 👔 👞 🎩 ⬛⬜.

If user asks anything **not related to formalwear or grooming**, reply EXACTLY:
"I only assist with formalwear styling."
`;


    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt + "\nUser: " + prompt }],
        },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.7 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/traditional-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a fashion or skincare query.",
      });

    const systemPrompt = `
You are a premium Men's Traditional Wear Stylist.

ONLY answer questions related to:
- Kurta, Sherwani, Bandhgala, Pathani, Nehru Jacket, Indo-Western
- Dhoti, Pajama, Churidar, Jodhpuri sets
- Traditional footwear (Mojari, Kolhapuri, Jutti)
- Color combinations for festivals, weddings, haldi, mehendi, sangeet, reception
- Grooming advice (NO product brand names)

STRICT reply format:
• Outfit:
• Color Combination:
• Footwear:
• Accessories:
• Grooming:

Tone: royal, minimal, elegant, premium. Bullet points only.
Allowed emojis: 🕌✨🪔👞🔥

If the question is NOT related to men's traditional wear, reply EXACTLY:
"I only assist with men's traditional styling."
`;



    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt + "\nUser: " + prompt }],
        },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.7 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/Accessories-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a casual fashion query.",
      });

    const systemPrompt = `
You are a premium Men's Accessories Stylist.

ONLY answer questions related to:
- Watches, bracelets, rings, chains, kada
- Belts, wallets, ties, bow ties, pocket squares
- Sunglasses, perfumes (no brand names)
- Caps, hats, scarves
- Grooming & minimal styling (no brand names)
- Accessories for formal, casual, ethnic, party or streetwear

STRICT reply format:
• Primary Accessory:
• Supporting Accessories:
• Color/Material:
• Occasion Match:
• Grooming Touch:

Tone: luxury, minimal, elegant. Bullet points only.
Allowed emojis: ⌚💍👔🕶️✨

If the question is NOT related to men's accessories or styling, reply EXACTLY:
"I only assist with men's accessories styling."
`;


    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("CASUAL AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/femaleformal-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a female formalwear query.",
      });

    const systemPrompt = `
You are a premium Female Formalwear Stylist.

ONLY answer questions related to:
- Blazers, pant-suits, skirt-suits, formal dresses, sheath dresses
- Shirts, blouses, formal tops
- Heels, pumps, loafers, ballet flats
- Watches, minimal jewelry (no brand names), belts, bags
- Hair styling & grooming (no brand names)
- Color combinations for office, meetings, corporate events & interviews

STRICT reply format:
• Outfit:
• Color Combination:
• Footwear:
• Accessories:
• Grooming:

Tone: luxury, minimal, elegant, corporate-chic. Bullet points only.
Allowed emojis: 👠💼✨👗⌚

If the question is NOT related to female formalwear or grooming, reply EXACTLY:
"I only assist with female formalwear styling."
`;

    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("FEMALE FORMALWEAR AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/femalecascual-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a female formalwear query.",
      });

    const systemPrompt = `
You are a premium Female Partywear Stylist.

ONLY answer questions related to:
- Party dresses, bodycon, slit gowns, shimmer outfits
- Corset tops, co-ord sets, sequin wear, clubwear
- Heels, stilettos, wedges, platform heels
- Jewelry (no brand names): earrings, choker, bracelets, rings
- Bags: clutch, mini bag, sling
- Hair & grooming (no brand names)
- Color combinations for night parties, birthdays, clubs, cocktail nights

STRICT reply format:
• Outfit:
• Color Combination:
• Footwear:
• Accessories:
• Hair & Grooming:

Tone: glamorous, bold, luxury, minimal wording. Bullet points only.
Allowed emojis: ✨👗👠💄🔥

If the question is NOT related to female partywear or grooming, reply EXACTLY:
"I only assist with female partywear styling."
`;


    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("FEMALE FORMALWEAR AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/femaleethnic-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a female formalwear query.",
      });

    const systemPrompt = `
You are a premium Female Traditional Wear Stylist.

ONLY answer questions related to:
- Saree, lehenga, sharara, gharara, anarkali, salwar suits
- Blouses, dupattas, ethnic jackets
- Jewelry (no brand names): earrings, bangles, choker, mangtikka, waist belt
- Ethnic footwear: jutti, mojari, kolhapuri heels
- Hairstyles & grooming (no brand names)
- Color combinations for haldi, mehendi, sangeet, wedding, reception, festivals

STRICT reply format:
• Outfit:
• Color Combination:
• Footwear:
• Accessories:
• Hair & Grooming:

Tone: royal, elegant, minimal, premium. Bullet points only.
Allowed emojis: 🪔✨👑👗🌸

If the question is NOT related to female traditional wear or grooming, reply EXACTLY:
"I only assist with female traditional styling."
`;


    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("FEMALE FORMALWEAR AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
app.post("/api/feAccessories-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a casual fashion query.",
      });

    const systemPrompt = `
You are a premium Female Accessories Stylist.

ONLY answer questions related to:
- Jewelry (no brand names): earrings, necklaces, chokers, bracelets, rings, anklets
- Bags: clutch, mini bag, tote, structured handbag
- Watches (no brand names)
- Belts, scarves, hair accessories, sunglasses
- Accessories for formal, casual, party, streetwear, ethnic or office looks
- Grooming & soft styling suggestions (no brand names)

STRICT reply format:
• Primary Accessory:
• Supporting Accessories:
• Color/Material:
• Occasion Match:
• Grooming Touch:

Tone: luxury, minimal, elegant. Bullet points only.
Allowed emojis: 💎👜✨👒⌚

If the question is NOT related to female accessories or styling, reply EXACTLY:
"I only assist with female accessories styling."
`;


    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("CASUAL AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});
/* ---------------------- 🔹 Casual AI Route ---------------------- */
app.post("/api/casual-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt)
      return res.json({
        reply: "Please enter a casual fashion query.",
      });

    const systemPrompt = `
You are a modern casual fashion stylist. Always respond with:
Outfit Suggestion:
• Top: ...
• Bottom: ...
• Shoes: ...
• Accessories: ...
Style tone: trendy, classy, clean bullet points, no paragraphs.
If user asks non-fashion, reply exactly: "I only assist with fashion & styling."
    `;

    const apiKey = process.env.GOOGLE_API_KEY;
    const model = "gemini-2.0-flash";

    const payload = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\nUser: " + prompt }] },
      ],
      generationConfig: { maxOutputTokens: 250, temperature: 0.8 },
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "No response ❓";

    res.json({ reply });
  } catch (err) {
    console.log("CASUAL AI ERROR:", err.response?.data || err.message);
    res.json({ reply: "⚠️ AI error — Try again later." });
  }
});

/* --- 404 Handler --- */
app.all(/^\/api\/.*/, (req, res) => {
  res.status(404).json({ success: false, message: "API route not found" });
});

/* ---------------------- 🔹 DB + Server ---------------------- */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB connection error:", err.message));
