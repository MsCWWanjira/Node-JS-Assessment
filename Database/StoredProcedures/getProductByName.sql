USE ProductsAPI
GO
CREATE OR ALTER PROCEDURE getProductByName(@ProductName VARCHAR(255))
AS
BEGIN
SELECT * FROM Products WHERE ProductName=@ProductName
END
GO