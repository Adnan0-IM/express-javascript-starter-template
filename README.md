# Express.js on Vercel

Simple Express.js + Vercel example that serves JSON data and provides a basic API structure.

## How to Use

You can deploy this repository to Vercel in two ways:

### Option 1: One-Click Deploy

Deploy the example directly using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Adnan0-IM/express-javascript-starter-template.git&project-name=express&repository-name=express-javascript-starter-template)

### Option 2: Manual Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Adnan0-IM/express-javascript-starter-template.git
cd express-javascript-starter-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Local Development

To run the application locally:

```bash
npm run dev
```

This will start the development server at http://localhost:3000.

### 4. Install Vercel CLI

Install the Vercel CLI globally on your machine:

```bash
npm i -g vercel
```

### 5. Login to Vercel

Authenticate with your Vercel account:

```bash
vercel login
```

### 6. Test Locally with Vercel

To simulate the Vercel deployment environment locally:

```bash
vercel dev
```

This will set up a local development environment that mimics the Vercel production environment, allowing you to test your application before deploying.

### 7. Deploy to Vercel

When you're ready to deploy your application to Vercel:

```bash
vercel
```

This will create a new deployment and provide you with a URL to your live application.

For subsequent deployments, you can use the same command. To deploy to production, run:

```bash
vercel --prod
```

## Project Structure

- `/api` - Serverless functions for Vercel deployment
- `/src` - Main application code
  - `app.js` - Express application setup
  - `middleware/` - Express middleware
  - `routes/` - API routes

## Important Notes

> **⚠️ Do not modify the `index.ts` file inside the `/api` folder**  
> This file is used by Vercel for serverless functionality. Write all your application code inside the `/src` folder instead.

## Configuration

The `vercel.json` file contains the configuration for the Vercel deployment, including routing rules:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/api" }]
}
```

This configuration routes all requests to the serverless function in the `/api` directory.

## Environment Variables

To use environment variables with your Vercel deployment:

1. Create a `.env` file in the root of your project for local development:

```
DB_URI=your_database_connection_string
API_KEY=your_api_key
```

2. Add these environment variables to your Vercel project:
   - Through the Vercel dashboard: Project Settings → Environment Variables
   - Or using the Vercel CLI:

```bash
vercel env add DB_URI
vercel env add API_KEY
```

Remember not to commit your `.env` file to version control. Add it to your `.gitignore` file.

## Troubleshooting

### Common Issues

1. **Port conflicts when running locally**:

   - If port 3000 is already in use, change the port in `src/app.js`

2. **Deployment fails with TypeScript errors**:

   - This template uses a .ts file for the Vercel serverless function but doesn't require TypeScript configuration for JavaScript development
   - Focus on writing your code in the `src` directory using JavaScript

3. **Environment variables not working**:

   - For local development: ensure your `.env` file is in the root directory
   - For Vercel deployment: check if you've added the environment variables in the Vercel dashboard

4. **API routes not working**:
   - Verify your `vercel.json` file is correctly set up
   - Check that your routes are properly defined in your Express application

For more help, refer to the [Vercel documentation](https://vercel.com/docs) or open an issue in the repository.``
