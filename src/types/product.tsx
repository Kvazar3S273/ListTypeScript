export interface Product 
{
    id: number;
    name:string;
    description: string;
    price: number;
}

export interface ProdState {   
    products : Product [];
}

export enum ProductTypes {
    GETPRODUCTS = 'GETPRODUCTS'    
}

interface GetProductsAction {
    type: ProductTypes.GETPRODUCTS;
    payload : Product [];    
}

export type ProductList = GetProductsAction;