# AWS App Runner Demo

A simple Node.js Express application designed to run on AWS App Runner.

## Features

- Health check endpoint at `/healthz`
- Root endpoint at `/` that returns application info with environment variable
- Ready for AWS App Runner deployment

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will run on port 3000 (or PORT environment variable)

## Endpoints

- `GET /healthz` - Returns "ok" for health checks
- `GET /` - Returns JSON with app name and environment

## Environment Variables

- `APP_ENV` - Sets the environment value in the response (defaults to "development")
- `PORT` - Sets the server port (defaults to 3000)

## AWS App Runner Configuration

When deploying to AWS App Runner:

1. **Source**: GitHub repository
2. **Build Command**: `npm ci`
3. **Start Command**: `npm start`
4. **Port**: 3000
5. **Environment Variables**:
   - `APP_ENV=prod`
6. **Health Check Path**: `/healthz`
7. **Auto Deploy**: Enabled

## Testing

After deployment, test the endpoints:

- Health check: `https://your-app-runner-domain/healthz`
- Root endpoint: `https://your-app-runner-domain/`
