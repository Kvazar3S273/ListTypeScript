import { ProductList, ProductTypes } from "../types/product";
import { Dispatch } from "redux";

export const GetProdlist = () => async (dispatch: Dispatch<ProductList>) => {
    dispatch({
        type: ProductTypes.GETPRODUCTS, payload: [
            {
                id: 1,
                name:'L7805M',
                description: 'Стабілізатор живлення 5В',
                price: 17
            },
            {
                id: 2,
                name:'KT315E',
                description: 'Транзистор n-p-n',
                price: 3
            },
            {
                id: 3,
                name:'Arduino UNO',
                description: 'Модуль КІТ',
                price: 180
            },
            {
                id: 4,
                name:'LM432',
                description: 'Мікросхема блока живлення',
                price: 27
            },
            {
                id: 5,
                name:'Atmega8A',
                description: 'Мікропроцесор',
                price: 71
            },
            {
                id: 6,
                name:'PIC16F628A',
                description: 'Мікропроцесор багатофункціональний',
                price: 64
            }
        ]
    });
}