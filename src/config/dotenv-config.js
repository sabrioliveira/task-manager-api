import dotenv from 'dotenv'; 
dotenv.config()

export const apiKey = process.env.DB_APIKEY
export const authDomain = process.env.DB_AUTHDOMAIN
export const projectId = process.env.DB_PROJECTID
export const storageBucket = process.env.DB_STORAGEBUCKET
export const messagingSenderId = process.env.DB_MESSAGINGSENDERID
export const appId = process.env.DB_APPID