BEGIN TRANSACTION;

DROP TABLE IF EXISTS order_items, orders, shopping_cart, shopping_cart_items, guest_session, products, account, users, account_role;

CREATE TABLE account_role (
    role_id SERIAL NOT NULL,
    role_name VARCHAR(100) NOT NULL UNIQUE,
    CONSTRAINT PK_account_role PRIMARY KEY (role_id)
);

CREATE TABLE account (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    role_id INT NOT NULL,
    CONSTRAINT FK_account_account_role FOREIGN KEY (role_id) REFERENCES account_role(role_id) 
);

CREATE TABLE users (
    user_id INT NOT NULL REFERENCES account(user_id) ON DELETE CASCADE,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    phone VARCHAR(12),
    CONSTRAINT PK_user_account PRIMARY KEY (user_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    available_quantity INT NOT NULL CHECK (available_quantity >= 0),
	image_path VARCHAR(2000)
);


CREATE TABLE shopping_cart (
    cart_id SERIAL PRIMARY KEY,
	 user_id INT UNIQUE REFERENCES account(user_id) ON DELETE CASCADE,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

CREATE TABLE shopping_cart_items (
    cart_item_id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL REFERENCES shopping_cart(cart_id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
);
CREATE TABLE guest_session (
    session_id SERIAL PRIMARY KEY,
    cart_id INT UNIQUE REFERENCES shopping_cart(cart_id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
    order_status VARCHAR(50) DEFAULT 'pending',
    at_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
);

COMMIT;

INSERT INTO account_role (role_name) VALUES ('ADMIN'), ('USER');

INSERT INTO account (username, password_hash, role_id) VALUES 
('admin', 'haspasswordsd', 1),
('uSers', 'ahsdhasdhasd', 2),
('users2', 'asdasdasdasdasd', 2);

INSERT INTO users (user_id, first_name, last_name, address, email, phone) VALUES
(1, 'Nhan', 'Dang', '123 ave asd', 'admin@gmail.com', '0913949904'),
(2, 'Sagar', 'Patel', '123 asdasd', 'user@gmail.com', '123123123'),
(3, 'Msj', 'Apple', '123223 asd', 'usersss@gmail.com', '09424244422');

INSERT INTO products (product_name, price, available_quantity, image_path) VALUES
('Car', 1000.00, 9, 'car1.jpg'),
('Truck', 900.00, 8,'car2.jpg'),
('Van', 800.00, 7, 'car3.jpg'),
('Car2', 700.00, 6, 'car4.jpg'),
('Truck2', 650.00, 5, 'car5.jpg'),
('Van2', 550.00, 4, 'car6.jpg'),
('Car3', 500.00, 3, 'car7.jpg'),
('Truck3', 400.00, 2, 'car8.jpg'),
('Van3', 300.00, 1, 'car9.jpg');

INSERT INTO shopping_cart (user_id) VALUES (1), (2);
INSERT INTO shopping_cart_items (cart_id, product_id, quantity, price)
VALUES (1, 101, 2, 50.00);

INSERT INTO orders (user_id, total_amount, order_status) VALUES
(1, 850.00, 'completed'), 
(2, 500.00, 'pending'),
(2, 999.00, 'completed');

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES 
(1, 1, 1, 1111.00),
(2, 2, 2, 424.00),
(3, 3, 1, 555.00);
SELECT * FROM account
 SELECT * FROM products
 ALTER TABLE products
DROP COLUMN image_url;
