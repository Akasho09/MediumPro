"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogPostUpdate = exports.blogPost = exports.signUpInput = exports.signInInput = void 0;
const zod_1 = require("zod");
exports.signInInput = zod_1.z.object({
    email: zod_1.z.string().min(3).max(30),
    password: zod_1.z.string()
});
exports.signUpInput = zod_1.z.object({
    name: zod_1.z.string().min(3).max(20),
    email: zod_1.z.string().min(3).max(30),
    password: zod_1.z.string()
});
exports.blogPost = zod_1.z.object({
    title: zod_1.z.string().min(3).max(100),
    content: zod_1.z.string(),
    authorId: zod_1.z.string()
});
exports.blogPostUpdate = zod_1.z.object({
    title: zod_1.z.string().min(3).max(100),
    content: zod_1.z.string(),
    authorId: zod_1.z.string()
});
