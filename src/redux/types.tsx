export type cardProp = {
    products:product[]
    isCart?:boolean;
  };
  
  export type product = {
    id?:string;
    title:string,
    image:string;
    price?:string;
    description:string;
    quantity?:number;
    isCart?:boolean;
  }