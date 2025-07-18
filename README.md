# 🧠 Velora – AI Image Generator

Velora is a full-stack MERN application that uses Stability AI’s Stable Diffusion XL model to generate stunning images from text prompts. Users can generate, share, browse, and download AI-generated images.

## 🔗 Live Demo

👉 [velora-ai.netlify.app](https://velora-ai.netlify.app)

## ⚙️ Tech Stack

- **Frontend**: React + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB Atlas  
- **Image Hosting**: Cloudinary  
- **AI Model**: Stability AI (SDXL)  
- **Deployment**: Netlify (frontend) + Render (backend)

## 🚀 How It Works

- 🌈 Enter a text prompt and click "Generate" — image is generated via Stability API  
- ☁️ Image is base64-encoded, uploaded to Cloudinary via backend  
- 📦 Post with name, prompt & image URL is saved to MongoDB  
- 🖼 All posts are shown on the homepage with search and download functionality

## 🛠 Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/dhavitgandhi/velora.git
cd velora

# 2. Setup Backend
cd server
npm install
# Create a .env file with:
# MONGODB_URL=your_mongodb_url
# STABILITY_API_KEY=your_stability_key
# CLOUDINARY_CLOUD_NAME=your_cloud_name
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret
npm start

# 3. Setup Frontend
cd ../client
npm install
npm run dev
```

## 📄 License

This project is licensed under the MIT License.
