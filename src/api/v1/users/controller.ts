import { NextFunction, Response } from 'express';
import RequestWithUser from 'utils/rest/request';
import fmt from 'utils/formatter';
import * as service from './service';

const getAllUsers = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const results = await service.getAllUsers(request, next);
  response.send(fmt.formatResponse(results, Date.now() - request.startTime, 'OK', 1));
};

const sendNotiToUser = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const results = await service.sendNotiToUser(request, next);
  response.send(fmt.formatResponse(results, Date.now() - request.startTime, 'OK', 1));
};

const getUserTrackTimetable = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const results = await service.getUserTrackTimetable(request, next);
  response.send(fmt.formatResponse(results, Date.now() - request.startTime, 'OK', 1));
};

const getUserSubscribedSubject = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const results = await service.getUserSubscribedSubject(request, next);
  response.send(fmt.formatResponse(results, Date.now() - request.startTime, 'OK', 1));
};

export { getAllUsers, sendNotiToUser, getUserTrackTimetable, getUserSubscribedSubject };
