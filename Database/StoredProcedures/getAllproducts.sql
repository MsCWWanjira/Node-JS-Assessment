USE ProductsAPI
GO
CREATE OR ALTER PROCEDURE getAllProducts
AS
BEGIN
SELECT * FROM Products
END
GO