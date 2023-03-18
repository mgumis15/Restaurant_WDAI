import { Timestamp } from "firebase/firestore"

export interface Review {
    uid: string,
    userName: string,
    date: Timestamp,
    stars: number,
    body: string,
}