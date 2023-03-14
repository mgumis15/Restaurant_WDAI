import { Review } from "./review.interface"
import { Star } from "./star.interface"

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
    reviews: Review[],
    stars: Star[]
}

export interface DishId extends Dish { id: string }



