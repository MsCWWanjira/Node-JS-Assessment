USE ProductsAPI
GO
CREATE OR ALTER PROCEDURE getProductById(@ProductID VARCHAR(255))
AS
BEGIN
SELECT * FROM Products WHERE ProductID=@ProductID
END
GO