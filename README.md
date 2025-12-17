## Anirved Panda – React Portfolio

Portfolio website built with **React**, **Vite**, and **Tailwind CSS**, using a crumpled-paper background theme and a flow chart based on your resume.

### 1. Setup and run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Place your background image (the crumpled-paper photo) in a `public` folder as `bg-paper.jpg`:

   - Path: `public/bg-paper.jpg`
   - The Tailwind config maps this to the `bg-paper` utility.

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL printed in the terminal (usually `http://localhost:5173`) to view the portfolio.

### 2. GitHub setup

1. Create a new Git repository in this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial React portfolio"
   ```

2. Create a new repository on GitHub (for example `react-portfolio`), then connect and push:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

### 3. Automatic deployment on Vercel

1. Go to `https://vercel.com` and log in with your GitHub account.
2. Click **Add New Project** → **Import Git Repository** and select this portfolio repo.
3. Vercel will auto-detect Vite + React:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Every time you push to the selected branch (for example `main`), Vercel will automatically build and deploy your portfolio.

You can then share the Vercel URL on your resume, LinkedIn, and other profiles.



