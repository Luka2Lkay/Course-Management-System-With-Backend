# Course Management System

A full-stack application for managing course information with image uploads, built with modern web technologies and best practices.

## Overview

This system manages courses using **Angular** for a dynamic frontend, **Express.js** for backend logic, **MongoDB** for flexible data storage, **Cloudinary** for cloud image storage, and **Multer** for file handling. Users can add, edit, update, and remove courses through an intuitive user-friendly interface. The backend handles data validation, interacts with the database, and manages image uploads to the cloud. This architecture provides a scalable and maintainable solution for managing course information effectively.

:earth_americas: https://course-management-system-with-backe-beta.vercel.app/available-courses

## Tech Stack

**Frontend:**
- Angular 16
- Angular Material Design
- TypeScript
- RxJS
- Reactive Forms

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary (cloud image storage)
- Multer (file upload handling)
- CORS enabled

## Features

:white_check_mark: Add, view, edit, and delete courses  
:white_check_mark: Upload and manage course images  
:white_check_mark: Responsive Material Design UI  
:white_check_mark: Persistent MongoDB data storage  
:white_check_mark: RESTful API with proper error handling  
:white_check_mark: Real-time form validation  

## Project Structure

```
Course-Management-System-With-Backend/
├── backEnd/                     # Express.js REST API
│   ├── src/
│   │   ├── config/             # Database configuration
│   │   ├── controllers/        # Request handlers
│   │   ├── models/             # MongoDB schemas
│   │   ├── routes/             # API routes
│   │   └── helper_functions/   # Utilities (Multer)
│   ├── images/                 # Uploaded course images
│   ├── package.json
│   └── server.js               # Entry point
│
└── frontEnd/                    # Angular SPA
    ├── src/
    │   ├── app/
    │   │   ├── dashboard/      # Main landing page
    │   │   ├── courses/        # Course list
    │   │   ├── course-detail/  # Course details
    │   │   ├── add-course/     # Add/edit form
    │   │   ├── services/       # HTTP client
    │   │   ├── interfaces/     # TypeScript types
    │   │   └── app-routing.module.ts
    │   └── styles.css
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Angular CLI (installed globally)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backEnd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your MongoDB connection string
   - Add your Cloudinary credentials (see [CLOUDINARY_SETUP.md](backEnd/CLOUDINARY_SETUP.md))

4. Start the development server:
   ```bash
   npm run start
   ```
   The backend server runs on **http://localhost:3300**

### Cloudinary Setup (Important!)

This project uses **Cloudinary** for cloud-based image storage. Follow these steps:

1. Create a free account at [cloudinary.com](https://cloudinary.com/)
2. Get your API credentials from the dashboard
3. Add them to your `.env` file:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

For detailed setup instructions, see [CLOUDINARY_SETUP.md](backEnd/CLOUDINARY_SETUP.md)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontEnd
   ```

2. Install Angular CLI globally (if not already installed):
   ```bash
   npm install -g @angular/cli
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   ng serve -o
   ```
   The frontend application opens at **http://localhost:4200**

## API Endpoints

All API endpoints are prefixed with `/course`:

- `GET /course` - Get all courses
- `GET /course/:id` - Get course by ID
- `POST /course` - Create new course
- `PUT /course/:id` - Update course
- `DELETE /course/:id` - Delete course

Static images are served from: `http://localhost:3300/images`

## Environment Configuration

Create a `.env` file in the `backEnd` directory with the following variables:

```env
# MongoDB Connection String
CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/course-management

# Cloudinary Credentials (get from https://cloudinary.com/console/settings/api-keys)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
LOCAL_URL=http://localhost:4200
LIVE_URL=Your-live-url
```

Run the `ng g environments` command to generate environments files. Write the following variables in both files:

export const environment = {
  apiUrl: 'YOUR-HOSTED-URL',
  localUrl: 'YOUR-LOCALHOST-PATH',
};

**Important:** Never commit `.env` to version control. Use `.env.example` as a template.

## Scripts

### Backend
- `npm run start` - Start with nodemon (auto-reload on changes)

### Frontend
- `npm start` - Start development server
- `npm run build` - Production build
- `npm test` - Run unit tests

## Usage

1. Start the backend server
2. Start the frontend application
3. Navigate to the dashboard
4. Use the interface to:
   - View all courses
   - Add new courses with images
   - Edit existing courses
   - Delete courses
   - View course details

## License

ISC
