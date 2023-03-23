import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Route, Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { User, UserId } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersCollection: AngularFirestoreCollection<User>

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.usersCollection = this.firestore.collection("users")
    this.auth.authState
      .subscribe((user) => {
        if (user) {
          this.getUserData(user)
        } else {
          localStorage.setItem('user', 'null')
        }
        JSON.parse(localStorage.getItem('user')!)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user !== null ? true : false
  }

  logIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          this.getUserData(res.user)
          this.auth.authState
            .subscribe((user) => {
              if (user) {
                this.router.navigate(["menu"])
              }
            })
        }
      }).catch((err) => {
        console.log(err.message)
      })
  }

  signUp(name: string, email: string, firstPassword: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, firstPassword)
      .then((res) => {
        if (res.user) {
          this.router.navigate(["menu"])
          this.firestore.doc(`users/${res.user.uid}`).set({
            uid: res.user.uid,
            email: res.user.email,
            name: name,
            banned: false,
            role: "client",
            orders: []
          }, { merge: true })
          this.getUserData(res.user)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  getUserData(user: any) {
    return this.usersCollection.doc(user.uid).snapshotChanges().pipe(a => {
      console.log(a)
      // const data = a.payload.doc.data() as User
      // const id = a.payload.doc.id
      return a
    })
  }


  logout() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem("user")
      this.router.navigate(["login"])
    })
  }
}
