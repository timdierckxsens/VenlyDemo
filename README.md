# 🧪 Venly Wallet SDK Demo

This demo shows how to integrate [Venly's Wallet SDK](https://docs.venly.io) in under 60 seconds using just HTML and JavaScript. It runs fully on testnet, so it's safe to explore with no real funds.

> 🛠️ Built for developers, product teams, and technical partners looking to explore **programmable wallets**, **stablecoin flows**, or **Web3 onboarding** in a frictionless way.

---

## ✨ Features

- ✅ Connect a wallet via Venly SDK
- ✅ View wallet address and network
- ✅ Display testnet balance (Polygon Mumbai)
- ✅ No backend, build tool, or auth required
- ✅ Safe for rapid sandbox experimentation

---

## 🔧 Usage

```html
<script src="https://unpkg.com/@venly/sdk-wallets"></script>
```


## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the demo locally:

   ```bash
   npm run start
   ```

   Then open [http://localhost:4000](http://localhost:4000) in your browser.

3. *(Optional)* Run using Docker:

   ```bash
   docker build -t venly-demo .
   docker run -p 4000:4000 venly-demo
   ```

### Environment variables

Set the following variables with your Venly credentials when running the demo:

- `CLIENT_ID` – your application's client identifier.
- `CLIENT_SECRET` – the client secret for the above ID.
- `ENVIRONMENT` – target Venly environment, e.g. `qa` or `prod`.

These can be provided to Docker via `-e` flags or exported in your shell.

## 🌱 Environment configuration

Create a `.env` file in the project root before starting the demo. The file is used to generate a runtime configuration script that is loaded by the application.

```
cp .env.example .env
```

Edit `.env` and provide your Venly values:

```
ARKETYPE_CLIENT_SECRET=your-secret
```

Running `npm start` will automatically generate `assets/js/runtime-config.js` from your `.env` file.

