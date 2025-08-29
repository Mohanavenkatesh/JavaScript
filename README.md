To run a specific file:

1. Open `package.json`.
2. Locate the `"scripts"` section, for example:
   ```json
   "scripts": {
     "start": "node day-8.js",
     "dev": "nodemon day-8.js"
   }
   ```
3. Replace `day-8.js` with the filename you want to run. For example, to run `day-7.js`:
   ```json
   "scripts": {
     "start": "node day-7.js",
     "dev": "nodemon day-7.js"
   }
   ```
4. Save the file. Now, running `npm start` or `npm run dev` will execute your chosen file.