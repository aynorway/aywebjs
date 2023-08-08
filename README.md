[中文](README_cn.md)

# AYWEBJS

AYWEBJS is a full-stack website built with React, Node.js, and MySQL. The project showcases various articles and allows access to different articles based on user levels. The site features a sidebar on the left, listing site navigation and articles' locations following a set folder structure.

## Features

- **Separation of Concerns**: By separating routes and handlers, code is modularized, enhancing readability and maintainability.
- **User Permission Management**: Utilizes JWT for user authentication, displaying different articles according to different user levels.
- **Modular Architecture**: Code is organized following modular principles, making the functionality of each part clear, easy to test, and reusable.

## Database Structure

### User Table

Stores user information, including username, password hash, salt, level, first name, last name, and registration date.

### Category Table

Stores article category information, with each category possibly having a parent category.

### Article Table

Stores article information, including title, category, required level, tags, publish date, edit date, author, and content.

## Project Structure

```
aywebjs/
├── README.md
├── config
│   ├── db.config.js         // Database configuration
│   └── jwt.config.js        // JWT configuration
├── handlers
│   ├── article.handler.js   // Article request handlers
│   ├── category.handler.js  // Category request handlers
│   └── user.handler.js      // User request handlers
├── middlewares
│   └── verifyToken.js       // JWT verification middleware
├── models
│   ├── article.model.js     // Article database models
│   ├── category.model.js    // Category database models
│   └── user.model.js        // User database models
├── routes
│   ├── article.routes.js    // Article routes
│   ├── category.routes.js   // Category routes
│   └── user.routes.js       // User routes
├── scripts
│   └── userManagement.js    // User management script
├── server.js                // Server startup file
└── utils
    └── db.utils.js          // Database connection pool
```

## Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/aywebjs.git
   ```

2. **Install dependencies**:

   ```bash
   cd aywebjs
   npm install
   ```

3. **Configure environment variables**:

   Set database and JWT keys in the `.env` file.

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run at [http://localhost:3000](http://localhost:3000).

## Contributing

Issues and pull requests are welcome.

## License

This project is licensed under the MIT License.

