import React, { Fragment } from 'react';
import {Link} from "react-router-dom"

const Course = () => {
  return (
    <Fragment>
      <section className="terms-items">
        <header>
          <h2> آخرین دوره های تاپ لرن </h2>
          <Link to="/allcourses"> مشاهده همه دوره ها </Link>
        </header>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <Link to="/singlecourse" className="img-layer">
                <img src="images/pic/1.jpg" />
              </Link>
              <h2>
                <Link to="/singlecourse"> آموزش متریال دیاین در زامارین </Link>
              </h2>
              <span> رایگان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/2.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> رایگان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/3.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> 150.000 تومان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/4.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> رایگان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/5.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> 15.000 تومان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/6.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> رایگان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/7.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> 20.000 تومان </span>
              <i>1:52:32</i>
            </article>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article>
              <a href="" className="img-layer">
                <img src="images/pic/8.jpg" />
              </a>
              <h2>
                <a href=""> آموزش متریال دیاین در زامارین </a>
              </h2>
              <span> 75.000 تومان </span>
              <i>1:52:32</i>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Course;
