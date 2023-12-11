
## Welcome to the Fullstack Referral App!


### 1. Installation
For this app, you need to have 2 terminals open - one for frontend and the other for backend

**Window 1** - Head to `frontend/` and do `npm install`
**Window 2** - Head to `backend/` and do `npm install`

That's it! No more complicating setup along  the way. 

### 2. Running the app simultaneously

**Window 1** - On `frontend/` , `npm run start`
**Window 2** - On `backend/` , `npm run dev`

**Note**: The database will be automatically created when you run the backend, eliminating the need for manual configuration.


### Additional Notes for the project
  
-  **Redux:** The app doesn't implement Redux, keeping the scope straightforward. Overengineering is avoided for simplicity and efficiency.
-  **Database:** SQLite is used to keep things simple. It's free and effective for this activity.
-  **Country List:** Although the country list can be fetched via API, a pre-downloaded JSON list is used as to not over-complicate.
-  **File Upload:** For simplicity, file uploads are implemented using base64 strings. This is to ensure that this app can serve as standalone. Best practice should still involve server-side upload and served via URL. The maximum file size allowed is 5MB in order to to keep the database unbloated.
-  **Postalcode:** Stored thisas a string to accommodate alphanumeric postal codes in various countries.
-  **Environment Variables (.env):** While it's not recommended to push .env files, it's done here for ease of running the app. In a production environment, it's advisable to obtain sensitive information from either teammates or through a password vault.

  

Overall, this app is completed around 9.5 hours.