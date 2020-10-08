import http from './HttpServices';
import config from './config.json';

export const getCourseS = () => {
  return http.get(`${config.localapi}/api/courses`);
};
