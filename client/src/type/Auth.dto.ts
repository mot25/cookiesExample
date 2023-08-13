export type CreateUsersType = {
    email: string | null
    password: string
    isGuest?: boolean
}

export type UsersType = [

]

export type ResponseToken = {
    token: string
}