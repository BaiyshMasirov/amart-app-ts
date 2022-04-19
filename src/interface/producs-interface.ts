export interface GetProducts {
    id: string
    userId: string;
    name: string;
    price: number;
  }
  
  export interface GetProductsDto {
    data?: GetProducts
  } 
  
  export interface GetProductsFace extends Array<GetProducts>{}