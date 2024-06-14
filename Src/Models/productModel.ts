import { Request } from 'express';

export interface IProductDTO extends Request {
    body: {
        ProductName: string;
        ProductPrice: number;
    };
}

export interface IProduct {
    ProductID: string;
    ProductName: string;
    ProductPrice: number;
}