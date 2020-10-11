import config from './config.json';
import http from './HttpServices';

export const getCourses = () => {
  return http.get(`${config.localapi}/api/courses`);
};
export const getCourse = (courseId) => {
  return http.get(`${config.localapi}/api/course/${courseId}`);
};
