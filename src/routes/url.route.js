import { Router } from "express";
import { handleGenerateNewShortURL, handleVisitHistory, handleGetVisitHistoryCount } from "../controllers/user.controller.js";
const urlRoute = Router();

urlRoute.post('/', handleGenerateNewShortURL)
urlRoute.get('/:shortId', handleVisitHistory)
urlRoute.get('/analytics/:shortId', handleGetVisitHistoryCount)


export {
    urlRoute,
}