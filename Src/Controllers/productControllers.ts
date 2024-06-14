import { Request, RequestHandler, Response } from 'express';
import mssql from 'mssql';
import { v4 as uid } from 'uuid';
import { IProduct, IProductDTO } from '../Models/productModels';
import { sqlConfig } from '../config/dbConfig';

export const addProduct = async (_request: IProductDTO, _response: Response) => {
    try {
        // declare the properties and their content
        const id = uid();
        const { ProductName } = _request.body;
        const { ProductPrice } = _request.body;

        if (!ProductName || !ProductPrice) {
            return _response.status(400).json({ error: 'To add a product, provide the name and price' });
        }

        // Create a connection
        const pool = await mssql.connect(sqlConfig);
        // Make a request to DB
        await pool
            .request()
            .input('ProductID', id)
            .input('ProductName', ProductName)
            .input('ProductPrice', ProductPrice)
            .execute('addProduct');
        _response.status(201).json({ message: `Product: ' ${ProductName} ', has been created successfully` });
    } catch (error) {
        _response.status(500).json(error);
    }
};

export const getAllProducts: RequestHandler = async (_request, _response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let products = (await pool.request().execute('getAllProducts')).recordset as IProduct[];
        _response.status(200).json(products);
    } catch (error) {
        _response.status(500).json(error);
    }
};

export const getProductByName = async (_request: Request<{ ProductName: string }>, _response: Response) => {
    try {
        let nameInput = _request.params.ProductName.toLowerCase();

        const pool = await mssql.connect(sqlConfig);
        // const foundCategory = await(
        //     await pool.request().input('ProductName', _request.params.ProductName).execute('getProductByName')
        // ).recordset[0] as IProduct;

        // if (foundCategory && foundCategory.ProductName) {
        //     return _response.status(200).json(foundCategory);
        // }
        let products = (await pool.request().execute('getAllProducts')).recordset as IProduct[];
        products.find(async (product) => {
            const isMatch = product.ProductName.toLowerCase() == nameInput;
            if (isMatch) {
                const productFound = (await (
                    await pool.request().input('ProductName', nameInput).execute('getProductByName')
                ).recordset[0]) as IProduct;
                return _response.status(200).json(productFound);
            }
            return _response.status(404).json({ message: 'No product has been found with the name you provided' });
        });
    } catch (error) {
        _response.status(500).json(error);
    }
};