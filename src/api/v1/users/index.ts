import { Router } from 'express';
import { asyncRouteHandler } from 'middlewares';
import { authenticationMiddleware } from 'middlewares/auth';
import * as controller from './controller';

const router = Router();

router.get('/', asyncRouteHandler(controller.getAllUsers));
router.post('/noti', authenticationMiddleware, asyncRouteHandler(controller.sendNotiToUser));
router.get('/track-timetable', asyncRouteHandler(controller.getUserTrackTimetable));
router.get('/subscribed-subject', asyncRouteHandler(controller.getUserSubscribedSubject));

export default router;
