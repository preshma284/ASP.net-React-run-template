# Quick Start Guide

This guide will help you get the application running in just a few minutes.

## Prerequisites

- [.NET SDK 10.0+](https://dotnet.microsoft.com/download)
- [Node.js 20.x+](https://nodejs.org/)

## Step 1: Clone the Repository

```bash
git clone https://github.com/preshma284/ASP.net-React-run-template.git
cd ASP.net-React-run-template
```

## Step 2: Start the Backend (Terminal 1)

```bash
cd Backend
dotnet restore
dotnet run
```

The backend will start at: `http://localhost:5000`

You should see:
```
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

## Step 3: Start the Frontend (Terminal 2)

Open a new terminal window and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at: `http://localhost:5173`

You should see:
```
VITE v7.3.0  ready in XXXms
Local:   http://localhost:5173/
```

## Step 4: Use the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Click "Sign Up" to create a new account
3. Enter your email and password (minimum 6 characters)
4. You'll be automatically logged in and see the welcome dashboard
5. Click "Logout" to test the login functionality
6. Use the same credentials to log back in

## Default Ports

- **Backend API**: `http://localhost:5000`
- **Frontend**: `http://localhost:5173`

## API Endpoints

- `POST /api/auth/signup` - Create a new user
- `POST /api/auth/login` - Login existing user

## Troubleshooting

### Backend won't start
- Make sure port 5000 is not in use
- Verify .NET SDK is installed: `dotnet --version`

### Frontend won't start
- Make sure port 5173 is not in use
- Verify Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again

### CORS errors
- Make sure the backend is running before the frontend
- Verify the API URL in `frontend/src/services/authService.ts` is correct

## Database

The SQLite database (`app.db`) is automatically created in the `Backend` directory on first run. You can inspect it using any SQLite client or the command:

```bash
cd Backend
sqlite3 app.db "SELECT * FROM Users;"
```

## Next Steps

- Read the full [README.md](README.md) for deployment instructions
- Review the security notes for production deployment
- Customize the JWT configuration in `appsettings.json`
