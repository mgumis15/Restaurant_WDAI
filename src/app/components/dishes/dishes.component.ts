import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { DishesService } from 'src/app/services/dishes.service'
import { Dish } from '../../interfaces/dish.interface'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {
  dishes$: Observable<Dish[]>
  constructor(firestore: AngularFirestore) {
    this.dishes$ = firestore.collection("dishes").valueChanges() as Observable<Dish[]>

    // private dishes: any[] = []
    // constructor(private service: DishesService) { }
    // async getDishes() {
    //   this.dishes = await this.service.getAllDishes()
    //   console.log(this.dishes)
    // }
  }
}
