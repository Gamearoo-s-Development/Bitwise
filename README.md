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
npm run start

```

Or use this for live reload during development using nodemon (npm i -g nodemon):

```bash
npm run dev

```

or use the provided docker-compose.yml

## 📂 Project Structure

```
.
├── commands
├── docker-compose.yml
├── Dockerfile
├── handlers
├── index.js
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── README.md
└── start.sh

4 directories, 8 files
```

## 📄 License

This project is licensed under the MIT License.
