import { Component } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
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
  constructor(private route: ActivatedRoute, private dishesService: DishesService) {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id)
      this.dishesService.getDish(this.id).subscribe(dish => this.dish = dish)
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
  getImg(): string {
    return this.dish?.imgs[this.imgId] ? this.dish?.imgs[this.imgId] : ""
  }
}
