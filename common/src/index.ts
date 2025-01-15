import {z} from 'zod'

const signInInput = z.object({
    email : z.string().min(3).max(30),
    password: z.string()
})

type signInInput = z.infer<typeof signInInput>

const signUpInput = z.object({
    name : z.string().min(3).max(20),
    email : z.string().min(3).max(30),
    password: z.string()
})

type signUpInput = z.infer<typeof signUpInput>

const signInInput = z.object({
    email : z.string().min(3).max(30),
    password: z.string()
})

type signInInput = z.infer<typeof signInInput>