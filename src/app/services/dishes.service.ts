import { Injectable } from '@angular/core'
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Dish } from '../interfaces/dish.interface'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private firestore: AngularFirestore) { }

  getAllDishes() {
    return new Promise<any>((res) => {
      this.firestore.collection("dishes").valueChanges({ idField: 'id' }).subscribe(dishes => res(dishes))
    })
  }
}
