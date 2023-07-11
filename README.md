# Consumer Cart

## Live Site:

## https://consumer-cart.onrender.com/

Consumer Cart is a full-stack e-commerce application built using the MERN (MongoDB, Express, React, Node.js) tech stack. It provides a comprehensive platform for online shopping and includes features such as user authentication, product management, order processing, and an interactive admin dashboard.

## Tech Stack

- Front-end: React.js, Redux
- Back-end: Node.js, Express.js
- Database: MongoDB
- Image Storage: Cloudinary
- Authentication: JSON Web Tokens (JWT)
- Mailing: Nodemailer
- Payment Integration: Stripe

## Features

1. User Authentication:

   - Users can create accounts, log in, and log out securely using JSON Web Tokens (JWT).
   - Passwords are stored securely using bcrypt for encryption.
   - Users receive confirmation and password reset emails using Nodemailer.

2. Product Management:

   - Admins have access to a user-friendly dashboard for managing products.
   - Admins can add, edit, and delete products.
   - Each product can have multiple images, stored securely in Cloudinary.

3. Order Processing:

   - Users can add products to their shopping cart and place orders.
   - Orders are securely processed and stored in the database.
   - Admins have access to the order details and can mark orders as shipped or completed.

4. Interactive Admin Dashboard:

   - The dashboard provides a comprehensive overview of the application's data.
   - Admins can manage products, users, and orders from a single interface.
   - Access control allows admins to restrict certain actions to authorized users only.

5. Secure Payment Integration:

   - Stripe is integrated for secure payment processing.
   - Users can securely enter their payment information during the checkout process.
   - Stripe ensures the safety and confidentiality of payment transactions.

## Installation

To run Consumer Cart locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/abhishekkumar11724/consumer-cart.git
```

2. Install dependencies for the back-end:

```bash
cd consumer-cart
npm install
```

3. Set up environment variables:

   - Create a `config.env` file in the `backend/config` directory.
   - Add the following variables to the `.env` file:

     ```dotenv

     ```

   PORT=4000
   DB_URI=mongodb-uri
   DB_URI="mongodb://127.0.0.1:27017/Ecommerce"

   JWT_SECRET=your-jwt-secret
   JWT_EXPIRE=5d
   COOKIE_EXPIRE=5

   SMPT_MAIL=your-email
   SMPT_PASSWORD=your-password
   SMPT_SERVICE=gmail
   SMPT_HOST=smtp.gmail.com
   SMPT_PORT=465

   STRIPE_API_KEY=stripe-api-key
   STRIPE_SECRET_KEY=stripe-secret-key

   CLOUDINARY_NAME=cloudinary-name
   CLOUDINARY_API_KEY=cloudinary-api-key
   CLOUDINARY_API_SECRET=cloudinary-api-secret

   FRONTEND_URL="http://localhost:3000"

   ```

   ```

4. Install dependencies for the front-end:

```bash
cd ../frontend
npm install
```

5. Start the development servers:

- Backend:

  ```bash
  cd consumer-cart
  npm run dev
  ```

- Frontend:

  ```bash
  cd ../frontend
  npm start
  ```

6. Open your browser and visit `http://localhost:3000` to access Consumer Cart.

## Contributing

We welcome contributions to enhance Consumer Cart! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push the changes to your fork: `git push origin my-new-feature`.
5. Submit a pull request to the main repository.

Please ensure your code adheres to the existing code style and includes appropriate tests.

## License

Consumer Cart is open-source software licensed under the [MIT license](LICENSE.md).

## Contact

If you have any questions, suggestions, or need assistance, please feel free to contact us at [email@example.com](mailto:abhishek.k.11724@example.com).
