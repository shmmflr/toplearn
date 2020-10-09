import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCourse } from '../../Redux/Actions/Course';
import config from '../../Services/config.json'

const SingleCourse = ({ match }) => {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCourse(match.params.id));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <section className="term-content">
          <header>
            <h1>{course.title} </h1>
          </header>
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
              <section className="term-description">
                <img src={`${config.toplearnapi}/${course.imageUrl}`} />

                <p>
                 {course.info}
                </p>

                <h2> سرفصل های این دوره : </h2>
                <ul>
                  <li>
                    {' '}
                    <h3> معرفی این دوره </h3> <i> رایگان </i>{' '}
                    <span>00:15:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{' '}
                    <span>01:15:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3>{' '}
                    <i> نقدی </i> <span>02:05:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3>{' '}
                    <i> نقدی </i> <span>00:10:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{' '}
                    <span>01:15:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3>{' '}
                    <i> نقدی </i> <span>02:05:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3>{' '}
                    <i> نقدی </i> <span>00:10:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{' '}
                    <span>01:15:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3>{' '}
                    <i> نقدی </i> <span>02:05:12</span>
                  </li>
                  <li>
                    {' '}
                    <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3>{' '}
                    <i> نقدی </i> <span>00:10:12</span>
                  </li>
                </ul>
              </section>

              <section className="user-comments">
                <header>
                  <h3> نظرات کاربران </h3>
                </header>
                <div className="inner">
                  <form>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ایمیل"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="شماره تماس"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="متن نظر"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-8 col-sm-7 col-xs-7">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="کد امنیتی"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-5 col-xs-5">
                            <img src="../images/captcha.jpg" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <button type="submit" className="btn btn-success">
                          {' '}
                          ثبت دیدگاه{' '}
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="comment-list">
                    <div className="comment-row">
                      <img src="../images/pic/avatar.jpg" />
                      <div className="left-col">
                        <h3> میترا رحیمی </h3>
                        <span>12/03/1397</span>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>

                    <div className="comment-row">
                      <img src="../images/pic/avatar.jpg" />
                      <div className="left-col">
                        <h3> میترا رحیمی </h3>
                        <span>12/03/1397</span>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>

                    <div className="comment-row">
                      <img src="../images/pic/avatar.jpg" />
                      <div className="left-col">
                        <h3> میترا رحیمی </h3>
                        <span>12/03/1397</span>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>

                    <div className="comment-row">
                      <img src="../images/pic/avatar.jpg" />
                      <div className="left-col">
                        <h3> میترا رحیمی </h3>
                        <span>12/03/1397</span>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>

                    <div className="comment-row">
                      <img src="../images/pic/avatar.jpg" />
                      <div className="left-col">
                        <h3> میترا رحیمی </h3>
                        <span>12/03/1397</span>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>

                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">
                              <i className="zmdi zmdi-chevron-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">
                              <i className="zmdi zmdi-chevron-left"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </section>
            </div>

            <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
              <div className="statistics">
                <ul>
                  <li>
                    <span> مدت دوره </span>
                    <i> 03:12:52 </i>
                  </li>
                  <li>
                    <span> تعداد ویدیوها </span>
                    <i> 16 </i>
                  </li>
                  <li>
                    <span> تعداد دانشجوها </span>
                    <i> 52 نفر </i>
                  </li>
                </ul>

                <a href=""> شرکت در دوره :{course.price}تومان </a>
              </div>

              <article className="teacher-info">
                <img src="../images/pic/avatar.jpg" />
                <h2> مدرس :محمدامین معتمدیان </h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است استفاده از طراحان گرافیک است ...
                </p>
              </article>

              <article className="term-info">
                <h2> اطلاعات این دوره </h2>
                <ul>
                  <li>سطح دوره: پیشرفته</li>
                  <li>وضعیت دوره: در حال برگزاری</li>
                  <li>قیمت :{course.price} تومان</li>
                  <li>تاریخ ثبت این دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                  <li>آخرین بروزرسانی دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                </ul>
              </article>

              <div className="share-layer">
                <span> به اشتراک گذاری </span>
                <a href="">
                  <i className="zmdi zmdi-facebook"></i>
                </a>
                <a href="">
                  <i className="zmdi zmdi-google-old"></i>
                </a>
                <a href="">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                <a href="">
                  <i className="zmdi zmdi-linkedin"></i>
                </a>
              </div>

              <div className="tags-layer">
                <a href=""> ربات تلگرام </a>
                <a href=""> ساخت ربات </a>
                <a href=""> برنامه نویسی ربات </a>
                <a href=""> کدنویسی ربات </a>
                <a href=""> ربات تلگرام </a>
                <a href=""> ساخت ربات </a>
                <a href=""> برنامه نویسی ربات </a>
                <a href=""> کدنویسی ربات </a>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SingleCourse;
