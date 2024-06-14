USE ProductsAPI
GO
CREATE OR ALTER PROCEDURE addProduct(@ProductID VARCHAR(255), @ProductName VARCHAR(255), @ProductPrice DECIMAL(10, 2))
AS
BEGIN
INSERT INTO Products (ProductID, ProductName, ProductPrice) VALUES(@ProductID, @ProductName, @ProductPrice)
END
GO