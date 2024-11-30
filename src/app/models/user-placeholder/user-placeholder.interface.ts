import { Address } from "cluster"
import { Company } from "./company.interface"

export interface UserPlaceholder {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}