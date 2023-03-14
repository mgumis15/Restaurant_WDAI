import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Dish, DishId } from '../../interfaces/dish.interface'

@Component({
  selector: 'app-dish-li',
  templateUrl: './dish-li.component.html',
  styleUrls: ['./dish-li.component.scss']
})
export class DishLiComponent {
  @Input() dish: DishId = {
    id: "",
    category: "Placeholder",
    cuisine: "Placeholder",
    description: "Placeholder",
    maxQuantity: 0,
    name: "Placeholder",
    price: 0,
    score: 0,
    type: "Placeholder",
    reviews: [],
    stars: [],

    imgs: ["https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg", "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg"],
    ingredients:
      ["Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder"]
  }

  constructor(private router: Router) {

  }

  onClick() {
    this.router.navigate(['dish', this.dish.id])
  }
}
