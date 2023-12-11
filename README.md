
## Welcome to the Fullstack Referral App!
A simple CRUD app built in Typescript

## 1. Installation

**Firstly**, clone this repo - `git clone https://github.com/kristianguevara/referral-builder.git`

For this app, you need to have 2 terminals open - one for frontend and the other for backend

**Window 1** - Head to `frontend/` and do `npm install`

**Window 2** - Head to `backend/` and do `npm install`

That's it! No more complicating setup along  the way. 


## 2. Running the app

### Run the backend first before frontend

**Backend Terminal**
- On `backend/`, run first `npm run build` in order to create an initial transpile
- Then run `npm run dev` to boot the server.

**Frontend Terminal**
- On `frontend/`, simply run `npm start`

**Permission Note:** By any chance you are encountering `Error: EACCES: permission denied`, ensure you own the folder by doing the following commands inside the `referral-builder/` folder:
1. `sudo chown -R $(whoami) .` - This command changes the ownership of the current directory and all its subdirectories to the current user.
2. `chmod -R 777 .` - This command changes the permissions of the current directory and all its subdirectories to allow read, write, and execute for the owner only.


**Note:** The database will be automatically created when you run the backend, eliminating the need for manual configuration.

--

### Additional Notes for the project

-  **Postal code:** Stored as a string to accommodate alphanumeric postal codes in various countries.
-  **Phone:** Accepts only numbers and dashes.
-  **Country List:** Although the country list can be fetched via API, a pre-downloaded JSON list is used as to not over-complicate.

--

-  **Redux:** The app doesn't implement Redux, keeping the scope straightforward. Over-engineering is avoided for simplicity and efficiency.
-  **Database:** SQLite is used to keep things simple. It's free and effective for this activity.
-  **File Upload:** For simplicity, file uploads are implemented using base64 strings. This is to ensure that this app can serve as standalone. Best practice should still involve server-side upload and served via URL. The maximum file size allowed is 5MB in order to to keep the database unbloated.
-  **Environment Variables (.env):** While it's not recommended to push .env files, it's done here for ease of running the app. In a production environment, it's advisable to obtain this through your teammates or a password vault.
- **Form Validation:** The validation is generally strict at this point. While a real-world application might involve numerous combinations and fine-tuning, for the purpose of this activity, implementation is kept leveled yet straightforward.


--
- **Typescript Definitions and TS Rulings:** While most types are fully defined, there are custom objects that need better definition, so "any" was used to cover those cases. It may not be practical to create meticulous definitions for every custom object in the context of this activity. Similar to the given Typescript ruling, some types are best ignored in order to prioritize simplicity and avoid unnecessary complexity, especially given the straightforward nature of the application.
- **Backend authentication** - CORS limits the access only through our frontend app, as well as our defined API key. Hitting Postman ain't accessible as well. Although there are other implementations to further secure the backend, similar to the above reasons, the implementation is done with simplicity in mind to maintain a straightforward setup.


##### Overall, this app was finished on approximately 10.5 hours. Hours don't account the pauses in-between.