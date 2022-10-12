import { Router } from 'express';
import healthRouter from './health';
import webhookRouter from './webhook';
import crawlFithouRouter from './fithou';
import ctmsRouter from './ctms';
import schoolScheduleRouter from './schoolSchedule';
import sendQuickRepliesRouter from './sendQuickReplies';
import userRouter from './users';

const router = Router();

router.use('/health', healthRouter);
router.use('/webhook', webhookRouter);
router.use('/crawl-fithou', crawlFithouRouter);
router.use('/ctms', ctmsRouter);
router.use('/school-schedule', schoolScheduleRouter);
router.use('/send-quick-replies', sendQuickRepliesRouter);
router.use('/users', userRouter);

export default router;
