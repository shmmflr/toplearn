import { getCourses } from '../../Services/CoursesServices';

export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await getCourses();
    console.log(data)
    await dispatch({ type: 'INIT', payload: data.courses });
  };
};
