# Cloudinary Setup Guide

This project uses **Cloudinary** for cloud-based image storage and delivery.

## Why Cloudinary?

- ✅ **Free Tier**: 25 credits/month (perfect for development)
- ✅ **Scalable**: Works seamlessly in serverless environments (Vercel, AWS Lambda)
- ✅ **CDN**: Automatic image optimization and fast delivery
- ✅ **No File System Issues**: Eliminates read-only file system errors on serverless platforms
- ✅ **Easy Integration**: Simple API with multer support

## Setup Steps

### 1. Create a Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com/)
2. Click "Sign up for free"
3. Complete the registration process
4. You'll be redirected to your **Dashboard**

### 2. Get Your API Credentials

1. From the Dashboard, click on the **Settings** icon (gear icon) at the top-right
2. Click on the **API Keys** tab
3. You'll see three values:
   - **Cloud Name** - your unique identifier
   - **API Key** - your public key
   - **API Secret** - keep this private!

### 3. Add Credentials to Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your Cloudinary credentials:
   ```env
   CONNECTION_STRING=mongodb+srv://...

   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

### 4. Install Dependencies

```bash
npm install cloudinary multer-storage-cloudinary
```

Already installed? Verify in `package.json`:
```json
{
  "dependencies": {
    "cloudinary": "^1.41.0",
    "multer-storage-cloudinary": "^4.0.0"
  }
}
```

### 5. Start Your Server

```bash
npm run start
```

## Verifying the Setup

### Local Testing

1. Start the backend server
2. Make a POST request to `/course/create` with:
   - Form data field `course` with a course name
   - File upload field `image` with an image file
   - Other fields: `description`, `modules`, `duration`, `availability`

3. Check the response - you should get a Cloudinary URL in the `imageUrl` field

### Cloudinary Dashboard

1. Go to [cloudinary.com/console](https://cloudinary.com/console/)
2. Click on **Media Library**
3. Navigate to the **course-management** folder
4. You should see your uploaded images!

## File Organization in Cloudinary

All course images are organized in the `course-management` folder in your Cloudinary account. You can manage, optimize, or delete images directly from the Cloudinary dashboard.

## Deployment (Vercel)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add all three Cloudinary credentials:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

4. Redeploy your project

The images will automatically be stored in Cloudinary instead of the local file system.

## Troubleshooting

### "Cloudinary not configured" Error

- Verify `.env` file exists and has correct variable names
- Check that environment variables are loaded: `console.log(process.env.CLOUDINARY_CLOUD_NAME)`
- Restart the server after updating `.env`

### Image Upload Fails

- Verify the `image` field is properly set in your form data
- Check file size is under 5MB
- Ensure file is a valid image format (JPEG, PNG, GIF, WebP)
- Check Cloudinary API credentials are correct

### Can't See Images in Dashboard

- Ensure you're in the **Media Library** view
- Check the **course-management** folder
- Wait a few seconds for uploads to process

## Pricing

- **Free Plan**: Up to 25 credits/month (perfect for development)
- **Pay As You Go**: Only pay for what you use
- See [Cloudinary Pricing](https://cloudinary.com/pricing) for details

---

✅ Setup complete! Your application now uses cloud storage for all images.
