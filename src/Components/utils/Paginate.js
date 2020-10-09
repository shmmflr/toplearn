import _ from 'lodash';

export const Paginate = (courseS, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(courseS).slice(startIndex).take(perPage).value();
};


// currentPage صفحه فعلی
// perPage تعداد جهت نمایش