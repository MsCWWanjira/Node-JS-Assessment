USE ProductsAPI;


CREATE TABLE Products (
    ProductID VARCHAR PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    ProductPrice DECIMAL(10, 2) NOT NULL
);