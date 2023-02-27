import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Route, Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {

    this.afAuth.authState
      .subscribe((user) => {
        if (user) {
          this.userData = user
          localStorage.setItem('user', JSON.stringify(this.userData))
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
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.setUserData(res.user)
        this.afAuth.authState
          .subscribe((user) => {
            if (user) {
              this.router.navigate(["Menu"])
            }
          })
      }).catch((err) => {
        console.log(err.message)
      })
  }

  signUp(nick: string, email: string, firstPassword: string, secondPassword: string) {

    return this.afAuth
      .createUserWithEmailAndPassword(email, firstPassword)
      .then((res) => {
        this.setUserData(res.user)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  sendVerificationEmail() {
    return this.afAuth.currentUser
      .then((user: any) => user.sendVerificationEmail())
      .then(() => {
        this.router.navigate(["verify-email-page"])
      })
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)
    const userData: User = {
      uid: user.uid,
      email: user.email,
      nick: user.nick,
      banned: user.banned,
      role: user.role,
      emailVerified: user.emailVerified,
      orders: user.orders
    }

    return userRef.set(userData, { merge: true })
  }


  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem("user")
      this.router.navigate(["Login"])
    })
  }
}
