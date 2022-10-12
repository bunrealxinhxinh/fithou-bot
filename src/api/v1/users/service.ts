import { NextFunction, Request } from 'express';
import { UserModel } from 'models';
import { sendMessage } from 'services/facebook';

export const getAllUsers = async (req: Request, next: NextFunction) => {
  try {
    const result = await UserModel.find().select('-password -subjectHTML');

    return result;
  } catch (error) {
    next(error);
  }
};

export const sendNotiToUser = async (req: Request, next: NextFunction) => {
  try {
    const { message, id } = req.body;
    await sendMessage(id, {
      text: `${message}`,
    });
    return message;
  } catch (error) {
    next(error);
  }
};

export const getUserTrackTimetable = async (req: Request, next: NextFunction) => {
  try {
    const trackTimetable = UserModel.count({ isTrackTimetable: true });
    const noTrackTimetable = UserModel.count({ isTrackTimetable: false });

    const resolveAll = await Promise.all([trackTimetable, noTrackTimetable]);

    return {
      trackTimetable: resolveAll[0],
      noTrackTimetable: resolveAll[1],
    };
  } catch (error) {
    next(error);
  }
};

export const getUserSubscribedSubject = async (req: Request, next: NextFunction) => {
  try {
    const subscribedSubject = UserModel.count({ isSubscribedSubject: true });
    const noSubscribedSubject = UserModel.count({ isSubscribedSubject: false });

    const resolveAll = await Promise.all([subscribedSubject, noSubscribedSubject]);

    return {
      subscribedSubject: resolveAll[0],
      noSubscribedSubject: resolveAll[1],
    };
  } catch (error) {
    next(error);
  }
};
