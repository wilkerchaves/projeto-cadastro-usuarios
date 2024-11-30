import { Music } from "./music"


export interface User {
    name: string
    username: string
    email: string
    password: string
    birthDate: Date | string
    state: number
    musics: Array<Music>
}