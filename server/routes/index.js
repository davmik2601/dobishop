import { Router } from "express";
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import adminRoutes from './adminRoutes.js';
import categoryRoutes from './categoryRoutes.js';

const router = Router();

const routes = [
    ...authRoutes,
    ...userRoutes,
    ...adminRoutes,
    ...categoryRoutes,
];

routes.forEach((eachRoute) => {
        router[eachRoute.method](`/${eachRoute.prefix}${eachRoute.path}`,
            ...(eachRoute.request ? eachRoute.request : []),
            ...(eachRoute.validators ? eachRoute.validators : []),
            ...(eachRoute.middlewares ? eachRoute.middlewares : []),
            eachRoute.action);
})

export default router;