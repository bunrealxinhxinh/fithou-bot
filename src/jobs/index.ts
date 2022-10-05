import config from 'config';
import schedule from 'node-schedule';

const rule = new schedule.RecurrenceRule();
// your timezone
rule.tz = 'Asia/Ho_Chi_Minh';

// once an hour
rule.minute = config.jobs.fithou.second;

import { crawlFithouJob } from './crawlFithouJob';
import { eveningSchedule, morningSchedule, noonSchedule } from './schoolSchedule';

const runjobs = () => {
  schedule.scheduleJob(rule, crawlFithouJob);
  // scheduler.addSimpleIntervalJob(crawlCtmsJob);

  schedule.scheduleJob('00 45 6 * * 0-6', morningSchedule);
  schedule.scheduleJob('00 00 12 * * 0-6', noonSchedule);
  schedule.scheduleJob('00 30 16 * * 0-6', eveningSchedule);

  // console.log(scheduler.getById(job.id).getStatus());
};

export default runjobs;
