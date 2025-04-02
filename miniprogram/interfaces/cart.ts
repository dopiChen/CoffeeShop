//购物车商品项

import { ProductItem } from "./product";

export interface cartItem extends ProductItem{
  checked: boolean
  count: number
}