const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env if present
dotenv.config();

const envVars = {
  ARKETYPE_CLIENT_SECRET: process.env.ARKETYPE_CLIENT_SECRET || ''
};

const targetPath = path.join(__dirname, 'assets/js/runtime-config.js');
const content = `window._env_ = ${JSON.stringify(envVars, null, 2)};\n`;

fs.writeFileSync(targetPath, content);

