import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// --- ES Module fix for __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Load .env file from server folder ---
dotenv.config({ path: path.join(__dirname, '.env') });

// --- Verify API key is loaded ---
if (!process.env.GOOGLE_FONTS_KEY) {
    console.error('❌ GOOGLE_FONTS_KEY not found! Check your .env file.');
    process.exit(1);
}
console.log('✅ API Key loaded:', process.env.GOOGLE_FONTS_KEY);

const app = express();
app.use(cors());

// --- Endpoint to fetch Google Fonts safely ---
app.get('/fonts', async (req, res) => {
    try {
        const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_FONTS_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Google Fonts API error: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch fonts' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
