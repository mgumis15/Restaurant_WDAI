import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { DishesService } from 'src/app/services/dishes.service'
import { Dish, DishId } from '../../interfaces/dish.interface'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  dishes$: Observable<DishId[]>
  constructor(dishesService: DishesService) {
    this.dishes$ = dishesService.getAllDishes()
  }
}
