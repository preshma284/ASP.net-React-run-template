# ASP.NET Core + React Authentication Application

A full-stack web application with ASP.NET Core backend and React frontend, featuring user signup and login functionality with SQLite database and JWT authentication.

## Features

- **Backend (ASP.NET Core)**
  - RESTful API with JWT authentication
  - SQLite database for user storage
  - Secure password hashing with BCrypt
  - CORS configured for React frontend
  
- **Frontend (React + TypeScript)**
  - Modern UI with Vite
  - Login and Signup forms
  - Token-based authentication
  - Protected dashboard

## Prerequisites

- [.NET SDK 10.0 or later](https://dotnet.microsoft.com/download)
- [Node.js 20.x or later](https://nodejs.org/)
- npm (comes with Node.js)

## Project Structure

```
.
├── Backend/                 # ASP.NET Core Web API
│   ├── Controllers/         # API Controllers
│   ├── Models/             # Data models and DTOs
│   ├── Data/               # Database context
│   └── app.db              # SQLite database (created on first run)
│
└── frontend/               # React application
    ├── src/
    │   ├── components/     # React components (Login, Signup, Dashboard)
    │   └── services/       # API service layer
    └── package.json
```

## Setup and Installation

### Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

4. Run the backend server:
   ```bash
   dotnet run
   ```

The backend API will be available at: `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at: `http://localhost:5173`

## API Endpoints

### Authentication Endpoints

- **POST** `/api/auth/signup` - Register a new user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **POST** `/api/auth/login` - Login existing user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

Both endpoints return:
```json
{
  "token": "jwt-token-here",
  "email": "user@example.com"
}
```

## Configuration

### Backend Configuration

The backend configuration is in `Backend/appsettings.json`:

- **Database**: SQLite database connection string
- **JWT Settings**: Secret key, issuer, and audience for JWT tokens

⚠️ **Important**: Change the JWT secret key in production!

### Frontend Configuration

The API URL is configured in `frontend/src/services/authService.ts`:
```typescript
const API_URL = 'http://localhost:5000/api';
```

## Deployment

### Backend Deployment

1. Build for production:
   ```bash
   cd Backend
   dotnet publish -c Release -o publish
   ```

2. Deploy the contents of the `publish` folder to your hosting service

3. Update `appsettings.json` with production settings:
   - Change JWT secret key
   - Update CORS origins if needed

### Frontend Deployment

1. Build for production:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the contents of the `dist` folder to your static hosting service

3. Update the API URL in `authService.ts` to point to your production backend

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Create React App default)
- `http://localhost:5173` (Vite default)

Update the CORS policy in `Backend/Program.cs` if your frontend runs on a different port or domain.

## Security Notes

### Authentication & Passwords
- Passwords are hashed using BCrypt before storage (never stored in plain text)
- JWT tokens are used for authentication with configurable expiration
- The database includes unique constraint on email addresses

### JWT Secret Key Configuration
⚠️ **CRITICAL**: The JWT secret key in `appsettings.json` is for development only!

**For Production:**
1. Generate a secure random key (minimum 32 characters)
2. Set it via environment variable:
   ```bash
   export Jwt__Key="your-secure-random-key-here"
   ```
3. Or update `appsettings.json` (but never commit production secrets to git)
4. The application will throw an error if no JWT key is configured

### Token Storage
⚠️ **Security Consideration**: Tokens are currently stored in browser localStorage for simplicity. This is vulnerable to XSS attacks.

**For Production**, consider:
- Using httpOnly cookies for token storage
- Implementing refresh tokens
- Adding CSRF protection
- Using a secure token storage library

### HTTPS
- Always use HTTPS in production
- Update CORS origins to match your production domains


## Technologies Used

### Backend
- ASP.NET Core 10.0
- Entity Framework Core
- SQLite
- BCrypt.Net
- JWT Bearer Authentication

### Frontend
- React 18
- TypeScript
- Vite
- Axios
- CSS3

## Troubleshooting

### Backend Issues

- **Database not created**: The database is automatically created on first run. Check for `app.db` in the Backend directory.
- **Port already in use**: Change the port in `Backend/Properties/launchSettings.json`

### Frontend Issues

- **API connection failed**: Ensure the backend is running on port 5000
- **CORS errors**: Check that the backend CORS configuration includes your frontend URL

## License

This project is open source and available under the MIT License.
