https://www.youtube.com/watch?v=VH3A3CVEYpo

# Online Catalog - Backend side
===============

## Getting Started
---------------

### Step 1: Clone the Repository

 Clone this repository to your local machine using your preferred method.

### Step 2: Install Dependencies

After cloning the repository, navigate to the project directory in your terminal and run the following command to install the required dependencies:

```bash
npm install

```

### Step 3: Configure Database

This project uses PostgreSQL as its database management system. To connect to the database, you'll need to create a .env file in the root of the project directory with the following configuration:

``` env
HOST=
PORT=
DATABASE=
PGUSER=
PASSWORD=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```

You can generate the ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET values using the following Node.js command:
``` javascritp
require('crypto').randomBytes(64).toString('hex')
```

### Step 4: Create Database Tables

To create the database tables, call the functions in the db.js file in the order they are written in the index.js file, specifically in the server.listen section.

### Step 5: Run the Project

Once you've completed the above steps, you can run the project using the following command in the terminal:
```bash
nodemon
```
Make sure to run this command in the correct directory.
