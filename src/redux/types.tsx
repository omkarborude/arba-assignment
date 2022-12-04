export type cardProp = {
    products:product[]
  };
  
  export type product = {
    title:string,
    image:string;
    price?:string;
    description:string;
  }