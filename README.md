# 🤖 Bitwise — Discord Utility Bot

**Bitwise** is a modular, efficient, and server-friendly Discord bot designed to handle moderation, logging, automation, and general server utilities. Built for stability and flexibility, Bitwise is your all-in-one toolkit for managing Discord communities.

## 🛠 Features

- 🔧 Server moderation (bans, mutes, filters, logs)
- 📝 Message logging and audit tools
- 🎉 Custom commands and utilities
- 🕒 Scheduled tasks and automated actions
- 📡 Webhook and status integration

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bitwise-bot.git
cd bitwise-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example `.env` file to a real one:

- **Linux/macOS:**
  ```bash
  cp .env.example .env
  ```

- **Windows (Command Prompt):**
  ```cmd
  copy .env.example .env
  ```

- **Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```

⚠️ Do **not** commit your `.env` file! It contains sensitive credentials.

## 🧪 Running the Bot

```bash
npm run dev
```

Or use `node` for live reload during development:

```bash
node index.js
```

## 📂 Project Structure

```
.
├── commands/        # Command files
├── events/          # Event listeners
├── utils/           # Utility functions
├── .env             # Your bot’s secrets (do NOT share)
├── .env.example     # Example environment file
├── index.js         # Bot entry point
└── package.json     # Project metadata and dependencies
```

## 📄 License

This project is licensed under the MIT License.
