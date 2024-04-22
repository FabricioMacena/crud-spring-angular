import { UUID } from "crypto";

export interface ProductInterface {
  id: UUID,
  name: string,
  amount: number,
  price: number,
  category: string,
  supplier: string
}
