## Setting Up the Backend

Follow the steps below to set up and start the backend:

1. **Navigate to the Backend Directory**  
   Ensure you are in the root directory of the backend. You can do this by running:

   ```bash
   cd /path/to/backend
   ```

2. **Create a `.env` File**  
   At the root of the backend directory, create a `.env` file with the following mandatory fields:

   - `FRONTEND_URL`: The URL of the frontend application.
   - `MONGO_URI`: The connection string for MongoDB.

   Optionally, you can also include the `PORT` field to specify the backend server's port (default is usually `3000`):

   ```env
   FRONTEND_URL=http://yourfrontendurl.com
   MONGO_URI=mongodb://yourmongouri.com
   PORT=3000  # Optional
   ```

3. **Start the Backend**  
   Once your `.env` file is set up, you can start the backend by running:

   ```bash
   npm start
   ```

4. **Backend Running**  
   The backend should now be running and ready to serve requests!
