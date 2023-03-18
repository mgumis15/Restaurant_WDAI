import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Dish, DishId } from '../../interfaces/dish.interface'

@Component({
  selector: 'app-dish-li',
  templateUrl: './dish-li.component.html',
  styleUrls: ['./dish-li.component.scss']
})
export class DishLiComponent {
  @Input() dish!: DishId
  stars: number = 0

  order: number = 0

  constructor(private router: Router) {

  }
  ngOnInit() {
    for (const iterator of this.dish.reviews) {
      this.stars += iterator.stars
    }
    this.stars = (this.dish.reviews.length > 0) ? parseFloat((this.stars / this.dish.reviews.length).toFixed(2)) : 0
  }

  openDetailsView() {
    this.router.navigate(['dish', this.dish.id])
  }

  incrementOrder(e: Event) {
    e.stopPropagation()
    if (this.dish.maxQuantity >= this.order + 1)
      this.order += 1
  }

  decrementOrder(e: Event) {
    e.stopPropagation()
    if (this.order - 1 >= 0)
      this.order -= 1
  }
}

// = {
//   id: "",
//     category: "Placeholder",
//       cuisine: "Placeholder",
//         description: "Placeholder",
//           maxQuantity: 0,
//             name: "Placeholder",
//               price: 0,
//                 score: 0,
//                   type: "Placeholder",
//                     reviews: [],
//                       stars: [],

//                         imgs: ["https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg", "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg"],
//                           ingredients:
//   ["Placeholder",
//     "Placeholder",
//     "Placeholder",
//     "Placeholder"]
// }