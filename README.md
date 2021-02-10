# Pagine azzurre ECommerce Website
![pagine_azzurre](/template/images/pagine_azzurre.jpg)

# React & Node Tutorial - Full ECommerce in 9 Hours [2021]

Welcome to my React and Node tutorial to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Demo Website

TODO: Bring to heroku
- 👉 Heroku : [https://pagine_azzurre.herokuapp.com](https://newamazona-final.herokuapp.com)

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:basir/amazona.git
$ cd amazona
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazona  
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 6 sample products

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

## Support

- Q/A: https://webacademy.pro/amazona
- Contact Instructor: [Basir](mailto:basir.jafarzadeh@gmail.com)
