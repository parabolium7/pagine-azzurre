# Pagine azzurre ECommerce Website
![pagine_azzurre](/pagine-azzurre.png)

## Demo Website

- 👉 Heroku : [https://pagine-azzurre.herokuapp.com](https://newamazona-final.herokuapp.com)

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:valazco/pagine_azzurre.git
$ cd pagine_azzurre
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/pagine-azzurre  
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

- Any Issue with pagine-azzurre? Contact Manteiner: [Germán Lugo](mailto:g.lugo.dev@gmail.com)
- Do you want to help to our project developing along us: https://webacademy.pro/amazona is a nice place to start how.
- This project is based on the code of "React & Node Tutorial - Full ECommerce in 9 Hours [2020] 
  from https://github.com/basir/amazona
- Contact Instructor: [Basir](mailto:basir.jafarzadeh@gmail.com)
