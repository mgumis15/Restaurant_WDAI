import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Dish } from 'src/app/interfaces/dish.interface'
import { DishesService } from 'src/app/services/dishes.service'
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent {
  id: string | null = null
  imgId: number = 0
  dish: Dish | undefined
  stars: number = 0
  order: number = 0
  constructor(private route: ActivatedRoute, private dishesService: DishesService) {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id)
      this.dishesService.getDish(this.id).subscribe(dish => { this.dish = dish; this.checkStars() })
  }


  ngOnInit(): void {
    this.checkStars()
  }

  checkStars() {
    if (this.dish) {
      for (const iterator of this.dish.reviews) {
        this.stars += iterator.stars
      }
      this.stars = (this.dish.reviews.length > 0) ? parseFloat((this.stars / this.dish.reviews.length).toFixed(2)) : 0
    }
  }


  nextImg() {
    this.imgId += 1
    if (this.dish?.imgs)
      this.imgId %= this.dish?.imgs.length
  }
  prevImg() {
    this.imgId -= 1
    if (this.imgId < 0 && this.dish?.imgs)
      this.imgId = this.dish?.imgs.length - 1
  }
  setImage(i: number) {
    this.imgId = i
  }
  getImg(): string {
    return this.dish?.imgs[this.imgId] ? this.dish?.imgs[this.imgId] : ""
  }
  incrementOrder(e: Event) {
    e.stopPropagation()
    if (this.dish)
      if (this.dish.maxQuantity >= this.order + 1)
        this.order += 1
  }

  decrementOrder(e: Event) {
    e.stopPropagation()
    if (this.order - 1 >= 0)
      this.order -= 1
  }
}
