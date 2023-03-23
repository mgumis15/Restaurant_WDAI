import { Order } from "./order.interface"

export interface User {
    email: string,
    name: string,
    banned: boolean,
    role: "client" | "manager" | "admin",
    orders: Order[]
}

export interface UserId extends User { uid: string }
