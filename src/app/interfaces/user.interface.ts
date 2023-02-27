import { Order } from "./order.interface"

export interface User {
    uid: string,
    email: string,
    nick: string,
    banned: boolean,
    role: "client" | "manager" | "admin",
    emailVerified: boolean,
    orders: Order[]
}