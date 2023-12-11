Notes

- I decided not to implement redux as the scope is pretty straightforward. As to any balance engineering with efficiency, it's best not to over engineer and keep things simple.
- The Country list can be pulled via API but for the simplicity purposes, I've downloaded a json list
- File upload by best practice should be uploade via server and served via URL but for straightforward purposes, I've implemented it via base64 in order to fulfill the app's purpose
- Postcode is a string because there are several countries that have alphanbumeric postal codes
- Ideally .env are not supposed to be pushed however, I'll push it so it's easy for any to run the activity. The setup if prod-wise is to ask this from a team mate or use a password vault. 
- Image is supposed to be served on. For this activity, I decided to use base64 so anyone trying the app can try uploading images. Do not that max file size is 300 kb.

9 Hours