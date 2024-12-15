BEGIN TRANSACTION ;

DROP TABLE IF EXISTS order_items, orders, Shopping_Cart, products, Account, Account_role, users;

CREATE TABLE Account_role (
    Role_id SERIAL NOT NULL,
    Role_name VARCHAR(100) NOT NULL UNIQUE,
    CONSTRAINT PK_Account_role PRIMARY KEY (Role_id)
);

CREATE TABLE users (
    User_id SERIAL PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    role_name VARCHAR(50) NOT NULL
);

CREATE TABLE Account (
    User_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    First_name VARCHAR(20) NOT NULL,
    Last_name VARCHAR(20) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Email VARCHAR(40) UNIQUE NOT NULL,
    Phone VARCHAR(12),
    CONSTRAINT PK_Account_users PRIMARY KEY (User_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    quantity INT NOT NULL CHECK (quantity >= 0)
);

CREATE TABLE Shopping_Cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
    order_status VARCHAR(50) DEFAULT 'pending',
    at_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_orders_users FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
);

COMMIT;
