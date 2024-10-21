# Setting up Firebase for Congo Tech Website

Follow these steps to set up Firebase hosting for your Congo Tech website:

1. Install Node.js and npm (if not already installed):
   - Download and install from https://nodejs.org/

2. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

3. Log in to Firebase:
   ```
   firebase login
   ```

4. Initialize Firebase in your project directory:
   ```
   cd /path/to/congo-tech-website
   firebase init
   ```
   - Choose "Hosting" when prompted for Firebase features
   - Select "Use an existing project" or "Create a new project"
   - Set your public directory to "out" (for Next.js static export)
   - Configure as a single-page app: "No"
   - Set up automatic builds and deploys with GitHub: "No"

5. Update your `package.json` with a build script for Next.js static export:
   ```json
   "scripts": {
     "build": "next build && next export"
   }
   ```

6. Build your project:
   ```
   npm run build
   ```

7. Deploy to Firebase:
   ```
   firebase deploy
   ```

After deployment, Firebase will provide you with a hosting URL where your site is live.

Remember to run `npm run build` and `firebase deploy` each time you make changes to your site.
