export interface IProductDto{
    id:number;
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
    categoryName: string;
}

export interface ICreateProductDto{
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
}
export interface IEditProductDto{
    id:number;
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
}

