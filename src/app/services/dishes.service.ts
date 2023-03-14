import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore"
import { Dish, DishId } from '../interfaces/dish.interface'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DishesService {
  dishesCollection: AngularFirestoreCollection<Dish>
  constructor(private firestore: AngularFirestore) {
    this.dishesCollection = firestore.collection("dishes")
  }

  getAllDishes(): Observable<DishId[]> {
    return this.dishesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Dish
        const id = a.payload.doc.id
        return { id, ...data }
      }))
    )
  }

  getDish(id: string): Observable<Dish | undefined> {
    return this.dishesCollection.doc(id).valueChanges()
  }

}
