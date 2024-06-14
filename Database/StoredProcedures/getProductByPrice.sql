USE ProductsAPI
GO
CREATE OR ALTER PROCEDURE getProductByPrice(@ProductPrice DECIMAL)
AS
BEGIN
SELECT * FROM Products WHERE ProductPrice=@ProductPrice
END
GO