-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

--insert 5 products into the table all at once
INSERT INTO products (name, price) VALUES
('Apple', 1.99),
('Banana', 0.99),
('Orange', 2.99),
('Mango', 3.99),
('Pineapple', 4.99);
