import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from '../../Services/config.json';
const Course = ({ courses, location }) => {
  const { pathname } = location;
  return (
    <Fragment>
      <section className="terms-items">
        {pathname === '/' ? (
          <header>
            <h2> آخرین دوره های تاپ لرن </h2>
            <Link to="/allcourses"> مشاهده همه دوره ها </Link>
          </header>
        ) : null}

        <div className="row">
          {courses.map((course) => (
            <div
              key={course._id}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
            >
              <article>
                <Link to={`/course/${course._id}`} className="img-layer">
                  <img src={`${config.localapi}/${course.imageUrl}`} />
                </Link>
                <h2>
                  <Link to={`/course/${course._id}`}>{course.title}</Link>
                </h2>
                {course.price === 0 ? (
                  <span>رایگان</span>
                ) : (
                  <span>{course.price}</span>
                )}
                <i>1:52:32</i>
              </article>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default withRouter(Course);
