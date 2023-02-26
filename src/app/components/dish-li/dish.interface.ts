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

interface Review {
    uid: string,
    body: string,
}

interface Star {
    uid: string,
    score: number
}

