import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Dish } from '../../interfaces/dish.interface'

@Component({
  selector: 'app-dish-li',
  templateUrl: './dish-li.component.html',
  styleUrls: ['./dish-li.component.scss']
})
export class DishLiComponent {
  @Input() dish: Dish = {

    category: "danie główne",
    cuisine: "arabska",
    description: "Bardzo dobry kotlet jagnięcy",
    maxQuantity: 8,
    name: "Stek jagnięcy",
    price: 35,
    score: 0,
    type: "mięsna",
    reviews: [],
    stars: [],

    imgs: ["https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg", "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg"],
    ingredients:
      ["mięso jagnięce",
        "cebula",
        "smalec",
        "bukiet surówek"]
  }
}
