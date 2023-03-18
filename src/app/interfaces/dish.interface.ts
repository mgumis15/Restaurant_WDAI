import { Review } from "./review.interface"
export interface Dish {
    name: string,
    category: string,
    cuisine: string,
    description: string,
    imgs: string[],
    ingredients: string[],
    maxQuantity: number,
    price: number,
    score: number,
    type: string
    reviews: Review[]
}

export interface DishId extends Dish { id: string }



