
## Welcome to the Fullstack Referral App!


## 1. Installation
For this app, you need to have 2 terminals open - one for frontend and the other for backend

**Window 1** - Head to `frontend/` and do `npm install`

**Window 2** - Head to `backend/` and do `npm install`

That's it! No more complicating setup along  the way. 


## 2. Running the app simultaneously

**Window 1** - On `frontend/`, run `npm run start`

**Window 2**
 - On `backend/`, run first `npm run build` in order to create an initial transpile
 - Then run `npm run dev` to boot the server.

**Note**: The database will be automatically created when you run the backend, eliminating the need for manual configuration.


### Additional Notes for the project

-  **Postalcode:** Stored thisas a string to accommodate alphanumeric postal codes in various countries.
-  **Phone:** Accepts only numbers and dashes.
-  **Country List:** Although the country list can be fetched via API, a pre-downloaded JSON list is used as to not over-complicate.

--

-  **Redux:** The app doesn't implement Redux, keeping the scope straightforward. Overengineering is avoided for simplicity and efficiency.
-  **Database:** SQLite is used to keep things simple. It's free and effective for this activity.
-  **File Upload:** For simplicity, file uploads are implemented using base64 strings. This is to ensure that this app can serve as standalone. Best practice should still involve server-side upload and served via URL. The maximum file size allowed is 5MB in order to to keep the database unbloated.
-  **Environment Variables (.env):** While it's not recommended to push .env files, it's done here for ease of running the app. In a production environment, it's advisable to obtain sensitive information from either teammates or through a password vault.
- **Form Validation:** The validation is generally strict at this point. While a real-world application might involve numerous combinations and fine-tuning, for the purpose of this activity, implementation robust yet straightforward.


--
- **Typescript Definitions and TS Rulings:** While most types are fully defined, there are custom objects that need better definition, so "any" was used to cover those cases. It may not be practical to create meticulous definitions for every custom object in the context of this activity. Similar to the given Typescript ruling, some types are best ignored in order to prioritize simplicity and avoid unnecessary complexity, especially given the straightforward nature of the application.
- **Backend authentication** - CORS limits the access only through our frontend app. Although there are other implementations to further secure the backend, similar to the above reasons, the implementation is done with simplicity in mind to maintain a straightforward setup.


##### Overall, this app was finished on approximately 10 hours. Hours do not account pauses in-between.