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
