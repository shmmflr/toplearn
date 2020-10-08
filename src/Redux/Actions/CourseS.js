import { getCourseS } from '../../Services/CourseSService';

export const getAllCourseS = () => {
  return async (dispatch) => {
    const { data } = await getCourseS();
    await dispatch({ type: 'INIT', payload: data.courses });
  };
};
