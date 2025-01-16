import {z} from 'zod'

export const signInInput2 = z.object({
    email : z.string().min(3).max(30),
    password: z.string()
})

export type signInInput = z.infer<typeof signInInput2>

export const signUpInput = z.object({
    name : z.string().min(3).max(20),
    email : z.string().min(3).max(30),
    password: z.string()
})

export type signUpInput = z.infer<typeof signUpInput>

export const blogPost = z.object({
    title : z.string().min(3).max(100),
    content: z.string(),
    authorId : z.string()
})

export type blogPost = z.infer<typeof blogPost>


export const blogPostUpdate = z.object({
    title : z.string().min(3).max(100),
    content: z.string(),
    authorId : z.string()
})

export type blogPostUpdate = z.infer<typeof blogPostUpdate>

