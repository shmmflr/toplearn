import config from './config.json';
import http from './HttpServices';

export const getCourses = () => {
  return http.get(`${config.toplearnapi}/api/courses`);
};
export const getCourse = (courseId) => {
  return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};
