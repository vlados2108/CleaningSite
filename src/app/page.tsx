"use client";
import "../styles/css/style.css";
import Image from "next/image";
import style from "../styles/scss/_schedule.module.scss";
import { useState } from "react";
import BtnSlider from "./btnSlider";
import dataSlider from "./dataSlider";

export enum ApproverType {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

type t = Record<ApproverType, string[]>;

export default function Home() {
  const schedule: any = {
    MONDAY: [
      "8.00 - 10.00",
      "10.00 - 12.00",
      "12.00 - 15.00",
      "15.00 - 18.00",
      "18.00 - 20.00",
      "20.00 - 22.00",
    ],
    TUESDAY: [
      "8.00 - 10.00",
      "10.00 - 13.00",
      "13.00 - 17.00",
      "17.00 - 20.00",
      "20.00 - 22.00",
    ],
    WEDNESDAY: [
      "9.00 - 11.00",
      "11.00 - 13.00",
      "13.00 - 15.00",
      "15.00 - 19.00",
      "19.00 - 22.00",
    ],
    THURSDAY: [
      "8.00 - 10.00",
      "10.00 - 12.00",
      "12.00 - 15.00",
      "15.00 - 18.00",
      "18.00 - 20.00",
      "20.00 - 22.00",
    ],
    FRIDAY: [
      "9.00 - 11.00",
      "11.00 - 13.00",
      "13.00 - 15.00",
      "15.00 - 19.00",
      "19.00 - 22.00",
    ],
    SATURDAY: [
      "7.00 - 9.00",
      "9.00 - 11.00",
      "11.00 - 13.00",
      "13.00 - 16.00",
      "16.00 - 13.00",
      "19.00 - 21.00",
    ],
    SUNDAY: [
      "9.00 - 11.00",
      "11.00 - 13.00",
      "13.00 - 15.00",
      "15.00 - 19.00",
      "19.00 - 22.00",
    ],
  };

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="main-container">
      {/* First slide */}
      <div className="first">
        <div className="first-square-container">
          <div className="first-left-rect"></div>
          <div className="first-right-rect"></div>
          <div className="first-content-container">
            <div className="first-header">
              <div className="first-frame">
                <div className="first-frame-text">schedule</div>
                <div className="first-frame-text">services</div>
                <div className="first-frame-text">contacts</div>
              </div>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="log-out"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.543 4.16797H11.4596C11.1834 4.16797 10.9184 4.27772 10.7231 4.47307C10.5277 4.66842 10.418 4.93337 10.418 5.20964V22.918H22.918V16.668L33.3346 25.0013L22.918 33.3346V27.0846H10.418V44.793C10.418 45.0692 10.5277 45.3342 10.7231 45.5295C10.9184 45.7249 11.1834 45.8346 11.4596 45.8346H38.543C38.8192 45.8346 39.0842 45.7249 39.2795 45.5295C39.4749 45.3342 39.5846 45.0692 39.5846 44.793V5.20964C39.5846 4.93337 39.4749 4.66842 39.2795 4.47307C39.0842 4.27772 38.8192 4.16797 38.543 4.16797Z"
                  fill="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="first-burger"
                fill="none"
              >
                <path
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="first-image-and-text-container">
              <div className="first-text-container">
                <div className="first-text-frame">
                  <div className="first-text1">
                    Professional cleaning for your comfort and impeccable
                    cleanliness
                  </div>
                  <div className="first-text-frame2">
                    <div className="first-text2">
                      I am ready to transform your home into a perfectly clean
                      space.
                    </div>
                    <div className="first-text3">
                      Trust me to take care of your home and I am sure that you
                      will be satisfied with the result. Order now to enjoy the
                      freshness and cleanliness of your home without the hassle.
                    </div>
                  </div>
                </div>
                <div className="first-frame-filter">
                  <div className="first-text4">Filter</div>
                </div>
              </div>
              <img className="first-image" src="/first.jpg" alt="empty" />
            </div>
          </div>
        </div>
      </div>
      {/* Second slide */}
      <div className="second">
        <div className="second-container">
          <div className="second-items">
            <div className="second-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="151"
                height="151"
                viewBox="0 0 151 151"
                fill="none"
                className="second-svg"
              >
                <circle cx="75.5" cy="75.5" r="75" fill="#FFB6B6" />
                <svg
                  x={46}
                  y={46}
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="59"
                  viewBox="0 0 59 59"
                  fill="none"
                  className="second-inner-svg"
                >
                  <path
                    d="M53.6693 15.0026H39.1693V10.1693C39.1693 7.51094 36.9943 5.33594 34.3359 5.33594H24.6693C22.0109 5.33594 19.8359 7.51094 19.8359 10.1693V15.0026H5.33594V51.2526H53.6693V15.0026ZM34.3359 15.0026H24.6693V10.1693H34.3359V15.0026Z"
                    fill="black"
                  />
                </svg>
              </svg>

              <div className="second-item-title">Flexibility</div>
              <div className="second-item-text text1">
                I offer you a flexible service schedule, allowing them to order
                services at a time convenient for you.
              </div>
            </div>
            <div className="second-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="151"
                height="151"
                viewBox="0 0 151 151"
                fill="none"
                className="second-svg"
              >
                <circle cx="75.5" cy="75.5" r="75" fill="#FFB6B6" />
                <svg
                  x={47.5}
                  y={47.5}
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  className="second-inner-svg"
                >
                  <path
                    d="M14.25 5.08594V18.8359L23.4167 28.0026L14.25 37.1693V50.9193H41.75V37.1693L32.5833 28.0026L41.75 18.8359V5.08594H14.25Z"
                    fill="black"
                  />
                </svg>
              </svg>
              <div className="second-item-title">Time saving</div>
              <div className="second-item-text text2">
                You save time that you can spend on other important things or on
                vacation.
              </div>
            </div>
            <div className="second-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                className="second-svg"
              >
                <circle cx="75" cy="75" r="75" fill="#FFB6B6" />
                <svg
                  x={47}
                  y={47}
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                  className="second-inner-svg"
                >
                  <g clip-path="url(#clip0_1_3223)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.8328 5.21237C27.9077 4.80942 29.0923 4.80942 30.1672 5.21237L46.7922 11.4467C47.6979 11.7862 48.4783 12.394 49.0291 13.1889C49.58 13.9839 49.8751 14.928 49.875 15.8951V28.6322C49.8751 32.6019 48.7697 36.4931 46.6828 39.8699C44.5959 43.2467 41.6099 45.9757 38.0594 47.751L30.0936 51.7339C29.5988 51.9813 29.0532 52.1102 28.5 52.1102C27.9468 52.1102 27.4012 51.9813 26.9064 51.7339L18.9406 47.751C15.3901 45.9757 12.4041 43.2467 10.3172 39.8699C8.23026 36.4931 7.12491 32.6019 7.125 28.6322V15.8951C7.12488 14.928 7.41998 13.9839 7.97086 13.1889C8.52174 12.394 9.30215 11.7862 10.2077 11.4467L26.8328 5.21237Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3223">
                      <rect width="57" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </svg>
              <div className="second-item-title">Your safety</div>
              <div className="second-item-text text3">
                You can 100% trust me: before starting work, i go through 5
                stages of internship and theoretical training.
              </div>
            </div>
            <div className="second-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="151"
                viewBox="0 0 150 151"
                fill="none"
                className="second-svg"
              >
                <circle cx="75" cy="75.5" r="75" fill="#FFB6B6" />
                <svg
                  x={46.5}
                  y={46.5}
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="58"
                  viewBox="0 0 57 58"
                  fill="none"
                  className="second-inner-svg"
                >
                  <path
                    d="M15.4569 53.1094L5.38771 43.0402L28.2135 20.1427L10.476 20.1427L10.476 7.88771L50.6094 7.88772L50.6094 48.021L38.3185 48.021L38.3185 30.2835L15.4569 53.1094Z"
                    fill="black"
                  />
                </svg>
              </svg>
              <div className="second-item-title">Quality</div>
              <div className="second-item-text text4">
                I am a professional in my field and have experience in
                housekeeping and guest service.{" "}
              </div>
            </div>
            <div className="second-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                className="second-svg"
              >
                <circle cx="75" cy="75" r="75" fill="#FFB6B6" />
                <svg
                  x={47}
                  y={47}
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                  className="second-inner-svg"
                >
                  <path
                    d="M44.6982 32.4521C45.7744 34.5674 46.3125 36.8125 46.3125 39.1875C46.3125 40.8203 46.0991 42.3975 45.6724 43.9189C45.2456 45.4404 44.6519 46.8599 43.8911 48.1772C43.1304 49.4946 42.2026 50.6914 41.1079 51.7676C40.0132 52.8438 38.8071 53.7715 37.4897 54.5508C36.1724 55.3301 34.7529 55.9331 33.2314 56.3599C31.71 56.7866 30.1328 57 28.5 57C26.8672 57 25.29 56.7866 23.7686 56.3599C22.2471 55.9331 20.8276 55.3394 19.5103 54.5786C18.1929 53.8179 16.9961 52.8901 15.9199 51.7954C14.8438 50.7007 13.916 49.4946 13.1367 48.1772C12.3574 46.8599 11.7544 45.4404 11.3276 43.9189C10.9009 42.3975 10.6875 40.8203 10.6875 39.1875C10.6875 36.8311 11.207 34.5952 12.2461 32.48L28.3608 0L44.6982 32.4521Z"
                    fill="black"
                  />
                </svg>
              </svg>
              <div className="second-item-title">Cleaning quality</div>
              <div className="second-item-text text5">
                My mission is perfect cleanliness in which every client will be
                happy.{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="second-worker-container">
          <div className="second-image-block">
            <img src="worker.png" alt="no image" />
            <div className="gradient">
              <div className="second-image-block-text">
                Welcome to the world of carefree comfort and perfect
                cleanliness. I’m a true expert in creating and maintaining
                impeccable cleanliness in your home. I understand that your time
                is valuable, which is why i offer comprehensive services
                covering all aspects of cleaning.
              </div>
            </div>
          </div>

          <div className="emojis-text-container">
            <div className="emoji-text-frame frame1">
              <img src="smile-icon.png" alt="no image" />
              <div className="emoji-text text1">
                I create a comfortable atmosphere and smile for clients,
                ensuring a pleasant interaction and a positive experience
                working with me.
              </div>
            </div>
            <div className="emoji-text-frame frame2">
              <img src="time-icon.png" alt="no image" />
              <div className="emoji-text text2">
                I perform my duties with full responsibility, paying attention
                to every detail.
              </div>
            </div>
            <div className="emoji-text-frame frame3">
              <img src="brain-icon.png" alt="no image" />
              <div className="emoji-text text3">
                I have experience and skills in cleaning, which guarantees high
                quality work.
              </div>
            </div>
            <div className="emoji-text-frame frame4">
              <img src="list-icon.png" alt="no image" />
              <div className="emoji-text text4">
                I plan my work efficiently to complete all tasks on time and
                meet my cleaning schedule.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third slide */}
      <div className="third">
        <div className="third-title">cleaning frequency</div>
        <div className="third-box-container">
          <div className="third-box box1">
            <div className="third-box-title">ONE-TIME CLEANING</div>
            <div className="third-box-text text1">
              I will do a complete cleaning, including vacuuming, mopping,
              cleaning surfaces, dusting, cleaning the bathroom and kitchen, and
              other necessary tasks. One-time cleaning is ideal before important
              events, after renovations or just to freshen up your space.
            </div>
          </div>
          <div className="third-box box2">
            <div className="third-box-title">TWICE A WEEK</div>
            <div className="third-box-text text2">
              I will visit your house twice a week to ensure it is always clean
              and tidy. As part of this service, all necessary cleaning tasks
              will be completed, including surface cleaning, vacuuming, mopping,
              bathroom and kitchen cleaning, and any other special requests you
              may have.
            </div>
          </div>
          <div className="third-box box3">
            <div className="third-box-title">EVERY WEEK</div>
            <div className="third-box-text text3">
              I will visit your house every week to keep it clean and tidy. The
              weekly cleaning will include vacuuming, mopping, dusting, cleaning
              the bathroom and kitchen, among other tasks.
            </div>
          </div>
        </div>
      </div>
      {/* Fourth slide */}
      <div className="filter">
        <div className="filter-header">filter</div>

        <div className="filter-container">
          <div className="filter-name">ALLERGY</div>
          <div className="filter-back">
            <div className="filter-values">
              <button className="filter-value btn1">NONE</button>
              <button className="filter-value btn2">CAT</button>
              <button className="filter-value btn2">DOG</button>
            </div>
          </div>
        </div>

        <div className="filter-container">
          <div className="filter-name">FREQUENCY</div>
          <div className="filter-back back2">
            <div className="filter-values">
              <button className="filter-value btn3">ONE-TIME</button>
              <button className="filter-value btn4">TWICE A WEEK</button>
              <button className="filter-value btn4">EVERY WEEK</button>
            </div>
          </div>
        </div>

        <div className="filter-container">
          <div className="filter-name type">TYPE OF CLEANING</div>
          <div className="filter-back back3">
            <div className="filter-values type">
              <button className="filter-value btn5">REGULAR CLEANING</button>
              <button className="filter-value btn5">WINDOW CLEANING</button>
              <button className="filter-value btn5">AFTER REPAIRING</button>
              <button className="filter-value btn5">AFTER RELOCATION</button>
            </div>
          </div>
        </div>

        <div className="address-search-container">
          <input className="filter-address" placeholder="ADDRESS" />
          <button className="filter-search">SEARCH</button>
        </div>
      </div>

      {/* Fifth slide */}
      <div className={style.schedule}>
        <div className={style.schedule_title}>SCHEDULE</div>
        <div className={style.schedule_container}>
          {Object.keys(schedule).map((dayName) => (
            <div className={style.row} key={dayName}>
              <div className={style.dayName}>{dayName}</div>
              <div className={style.row_time_container}>
                {schedule[dayName].map((time: string) => (
                  <div className={style.time} key={time}>{time}</div>
                ))}
              </div>
              <div className={style.order}>ORDER</div>
            </div>
          ))}
        </div>
      </div>

      {/* Six slide */}
      <div className="faq">
        <div className="faq-container">
          <div className="faq-title">frequently asked questions</div>
          <div className="faq-body">
            <div className="faq-column">
              <div className="faq-box box1">
                <div className="faq-question">
                  What services are included in the weekly cleaning package?
                </div>
                <div className="faq-answer">
                  The weekly cleaning package includes a complete cleaning of
                  all areas, including vacuuming, dusting, mopping, cleaning the
                  bathroom, kitchen and other common areas.
                </div>
              </div>
              <div className="faq-box box2">
                <div className="faq-question">
                  What materials and cleaning products do you use?
                </div>
                <div className="faq-answer">
                  We use professional and safe cleaning products and materials.
                  This includes gentle detergents, microfiber cloths, vacuum
                  cleaners with hera filters, and other tools.
                </div>
              </div>
              <div className="faq-box box3">
                <div className="faq-question">
                  How often do you recommend regular cleaning to keep your home
                  clean?
                </div>
                <div className="faq-answer">
                  The recommended frequency of regular cleaning depends on the
                  individual needs and characteristics of your home. Generally,
                  regular cleaning once or twice a week is recommended, but we
                  can offer you a more flexible schedule to suit your needs and
                  preferences.
                </div>
              </div>
            </div>

            <div className="faq-column">
              <div className="faq-box box4">
                <div className="faq-question">
                  How long does a one-time cleaning process usually take?
                </div>
                <div className="faq-answer">
                  The time it takes for a one-time cleaning depends on the size
                  and condition of your home. I always strive to get the job
                  done quickly and efficiently so that you can enjoy cleanliness
                  as soon as possible.
                </div>
              </div>
              <div className="faq-box box5">
                <div className="faq-question">
                  Do you guarantee privacy and security while cleaning?
                </div>
                <div className="faq-answer">
                  Yes, we adhere to high standards of privacy and security. All
                  of us maids are vetted to make sure your home and your
                  personal belongings are safe.
                </div>
              </div>
              <div className="faq-box box box6">
                <div className="faq-question">
                  Can you tailor your services to my individual needs?
                </div>
                <div className="faq-answer">
                  Yes, I am ready to tailor our services to your individual
                  needs. My goal is to provide you with maximum comfort and
                  satisfaction from my services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh slide */}
      <div className="reviews">
        <div className="reviews-title">REVIEWS</div>
        <div className="reviews-back">
          <div className="slider-container">
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            {dataSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1
                      ? "slider-boxes active"
                      : "slider-boxes"
                  }
                >
                  <div className="slider_box">
                    <div className="slider_content">
                      <div className="slider-text">{obj.data1.text}</div>
                      <div className="slider-author-container">
                        <div className="slider-image">
                          <img src={obj.data1.image} />
                        </div>
                        <div className="slider-author">{obj.data1.author}</div>
                        <div className="slider-date">09.06.23</div>
                      </div>
                    </div>
                  </div>
                  <div className="slider_box">
                    <div className="slider_content">
                      <div className="slider-text">{obj.data2.text}</div>
                      <div className="slider-author-container">
                        <div className="slider-image">
                          <img src={obj.data2.image} />
                        </div>
                        <div className="slider-author">{obj.data2.author}</div>
                        <div className="slider-date">05.06.23</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
          </div>
        </div>

        <div className="reviews-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <path
              d="M28.5673 5.19336C15.4245 5.19336 4.75781 15.86 4.75781 29.0029C4.75781 42.1457 15.4245 52.8124 28.5673 52.8124C41.7102 52.8124 52.3769 42.1457 52.3769 29.0029C52.3769 15.86 41.7102 5.19336 28.5673 5.19336ZM39.615 21.3838C39.2578 25.1457 37.7102 34.2886 36.9245 38.5029C36.5911 40.2886 35.9245 40.8838 35.3054 40.9553C33.9245 41.0743 32.8769 40.0505 31.5435 39.1696C29.4483 37.7886 28.2578 36.9315 26.234 35.5981C23.8769 34.0505 25.4007 33.1934 26.7578 31.8124C27.115 31.4553 33.2102 25.9076 33.3292 25.4076C33.3458 25.3319 33.3436 25.2533 33.3228 25.1786C33.3021 25.1039 33.2634 25.0354 33.2102 24.9791C33.0673 24.86 32.8769 24.9076 32.7102 24.9315C32.4959 24.9791 29.1626 27.1934 22.6626 31.5743C21.7102 32.2172 20.8531 32.5505 20.0911 32.5267C19.234 32.5029 17.615 32.0505 16.4007 31.6457C14.9007 31.1695 13.734 30.9076 13.8292 30.0743C13.8769 29.6457 14.4721 29.2172 15.5911 28.7648C22.5435 25.741 27.1626 23.741 29.4721 22.7886C36.0911 20.0267 37.4483 19.5505 38.3531 19.5505C38.5435 19.5505 38.9959 19.5981 39.2816 19.8362C39.5197 20.0267 39.5911 20.2886 39.615 20.4791C39.5911 20.6219 39.6388 21.0505 39.615 21.3838Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <path
              d="M28.7182 5.19336C41.8682 5.19336 52.5278 15.8529 52.5278 29.0029C52.5278 42.1529 41.8682 52.8124 28.7182 52.8124C24.5106 52.8192 20.377 51.7057 16.7421 49.5862L4.91825 52.8124L8.1373 40.9838C6.01609 37.3478 4.9017 33.2124 4.90872 29.0029C4.90872 15.8529 15.5682 5.19336 28.7182 5.19336ZM20.604 17.8124L20.1278 17.8315C19.8195 17.8502 19.5182 17.9312 19.2421 18.0695C18.9838 18.2158 18.748 18.3987 18.5421 18.6124C18.2563 18.8815 18.0944 19.1148 17.9206 19.341C17.04 20.486 16.5658 21.8917 16.573 23.3362C16.5778 24.5029 16.8825 25.6386 17.3587 26.7005C18.3325 28.8481 19.9349 31.1219 22.0492 33.2291C22.5587 33.7362 23.0587 34.2457 23.5968 34.7195C26.2239 37.0326 29.3546 38.7006 32.7397 39.591L34.0921 39.7981C34.5325 39.8219 34.973 39.7886 35.4159 39.7672C36.1093 39.7314 36.7864 39.5436 37.3992 39.2172C37.711 39.0566 38.0153 38.8818 38.3111 38.6934C38.3111 38.6934 38.4135 38.6267 38.6087 38.4791C38.9302 38.241 39.1278 38.0719 39.3944 37.7934C39.5921 37.5886 39.7635 37.3481 39.8944 37.0743C40.0802 36.6862 40.2659 35.9457 40.3421 35.3291C40.3992 34.8576 40.3825 34.6005 40.3754 34.441C40.3659 34.1862 40.154 33.9219 39.923 33.81L38.5373 33.1886C38.5373 33.1886 36.4659 32.2862 35.1992 31.71C35.0667 31.6522 34.9246 31.6191 34.7802 31.6124C34.6172 31.5957 34.4527 31.614 34.2974 31.6662C34.1422 31.7183 33.9999 31.8031 33.8802 31.9148C33.8682 31.91 33.7087 32.0457 31.9873 34.1315C31.8885 34.2642 31.7524 34.3646 31.5963 34.4197C31.4403 34.4748 31.2714 34.4822 31.1111 34.441C30.956 34.3994 30.804 34.3469 30.6563 34.2838C30.3611 34.16 30.2587 34.1124 30.0563 34.0267C28.6898 33.4304 27.4246 32.6247 26.3063 31.6386C26.0063 31.3767 25.7278 31.091 25.4421 30.8148C24.5054 29.9177 23.689 28.9029 23.0135 27.7957L22.873 27.5695C22.7721 27.4176 22.6905 27.2536 22.6302 27.0815C22.5397 26.7315 22.7754 26.4505 22.7754 26.4505C22.7754 26.4505 23.354 25.8172 23.623 25.4743C23.8849 25.141 24.1063 24.8172 24.2492 24.5862C24.5302 24.1338 24.6182 23.6695 24.4706 23.31C23.804 21.6815 23.1135 20.06 22.404 18.4505C22.2635 18.1315 21.8468 17.9029 21.4682 17.8576C21.3397 17.8434 21.2111 17.8291 21.0825 17.8195C20.7628 17.8037 20.4424 17.8068 20.123 17.8291L20.6016 17.81L20.604 17.8124Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.9954 6.68554C32.5045 5.01107 24.7363 5.01107 17.2454 6.68554L16.4382 6.86411C14.3311 7.33521 12.3959 8.38122 10.8474 9.88594C9.299 11.3907 8.19802 13.2952 7.66679 15.3879C5.76797 22.8701 5.76797 30.7081 7.66679 38.1903C8.1734 40.1862 9.19871 42.0126 10.6388 43.4844C12.0788 44.9563 13.8825 46.0212 15.8668 46.5713L16.9739 53.1808C17.0093 53.3907 17.1002 53.5872 17.2373 53.75C17.3745 53.9128 17.5527 54.0359 17.7535 54.1064C17.9543 54.1769 18.1704 54.1922 18.3792 54.1509C18.5879 54.1095 18.7818 54.013 18.9406 53.8713L25.443 48.0546C30.3241 48.3525 35.2229 47.9621 39.9954 46.8951L40.8049 46.7165C42.912 46.2454 44.8472 45.1994 46.3957 43.6947C47.9441 42.19 49.0451 40.2854 49.5763 38.1927C51.4749 30.7105 51.4749 22.8725 49.5763 15.3903C49.0449 13.2972 47.9436 11.3925 46.3947 9.88778C44.8458 8.38303 42.91 7.3372 40.8025 6.8665L39.9954 6.68554ZM19.2549 15.1951C18.8124 15.1307 18.3612 15.2197 17.9763 15.4474H17.943C17.0501 15.9713 16.2454 16.6308 15.5596 17.407C14.9882 18.0665 14.6787 18.7332 14.5977 19.376C14.5501 19.757 14.5835 20.1427 14.6954 20.507L14.7382 20.5308C15.3811 22.4189 16.2192 24.2355 17.243 25.9451C18.5631 28.3462 20.1876 30.567 22.0763 32.5522L22.1335 32.6332L22.2239 32.6998L22.2787 32.7641L22.3454 32.8213C24.3376 34.7156 26.5635 36.3479 28.9692 37.6784C31.7192 39.176 33.3882 39.8832 34.3906 40.1784V40.1927C34.6835 40.2832 34.9501 40.3236 35.2192 40.3236C36.0728 40.2606 36.8808 39.9135 37.5144 39.3379C38.2882 38.6522 38.943 37.8451 39.4525 36.9474V36.9308C39.9311 36.026 39.7692 35.1736 39.0787 34.5951C37.6918 33.3832 36.1921 32.3069 34.6001 31.3808C33.5335 30.8022 32.4501 31.1522 32.012 31.7379L31.0763 32.9189C30.5954 33.5046 29.7239 33.4236 29.7239 33.4236L29.7001 33.4379C23.1977 31.7784 21.462 25.1951 21.462 25.1951C21.462 25.1951 21.3811 24.2998 21.9835 23.8427L23.1549 22.8998C23.7168 22.4427 24.1073 21.3617 23.5049 20.2951C22.5849 18.7016 21.5107 17.2024 20.2977 15.8189C20.0332 15.4933 19.6622 15.2715 19.2501 15.1927L19.2549 15.1951ZM30.2406 12.3332C29.9249 12.3332 29.6221 12.4586 29.3988 12.6818C29.1755 12.9051 29.0501 13.2079 29.0501 13.5236C29.0501 13.8394 29.1755 14.1422 29.3988 14.3654C29.6221 14.5887 29.9249 14.7141 30.2406 14.7141C33.2525 14.7141 35.7525 15.6974 37.7311 17.5832C38.7477 18.6141 39.5406 19.8355 40.0596 21.1736C40.5811 22.5141 40.8192 23.9451 40.7573 25.3784C40.7507 25.5347 40.775 25.6908 40.8287 25.8378C40.8825 25.9847 40.9647 26.1196 41.0706 26.2348C41.2845 26.4675 41.582 26.6056 41.8977 26.6189C42.2135 26.6321 42.5215 26.5194 42.7542 26.3055C42.9868 26.0917 43.125 25.7941 43.1382 25.4784C43.2121 23.7153 42.9194 21.956 42.2787 20.3117C41.6352 18.6597 40.6595 17.1573 39.412 15.8974L39.3882 15.8736C36.9335 13.5284 33.8263 12.3332 30.2406 12.3332ZM30.1596 16.2474C29.8439 16.2474 29.5411 16.3729 29.3179 16.5961C29.0946 16.8194 28.9692 17.1222 28.9692 17.4379C28.9692 17.7537 29.0946 18.0565 29.3179 18.2797C29.5411 18.503 29.8439 18.6284 30.1596 18.6284H30.2001C32.3715 18.7832 33.9525 19.507 35.0596 20.6951C36.1954 21.9189 36.7835 23.4403 36.7382 25.3213C36.731 25.637 36.8494 25.9427 37.0675 26.1711C37.2857 26.3995 37.5856 26.5319 37.9013 26.5391C38.217 26.5464 38.5227 26.4279 38.7511 26.2098C38.9795 25.9917 39.1119 25.6918 39.1192 25.376C39.1763 22.907 38.3811 20.776 36.8049 19.076V19.0713C35.193 17.3427 32.9811 16.4284 30.3192 16.2498L30.2787 16.2451L30.1596 16.2474ZM30.1144 20.2355C29.9551 20.2215 29.7946 20.2397 29.6424 20.289C29.4903 20.3384 29.3497 20.4179 29.2289 20.5228C29.1082 20.6277 29.0099 20.7558 28.9398 20.8996C28.8696 21.0433 28.8292 21.1997 28.8209 21.3595C28.8126 21.5192 28.8365 21.6789 28.8913 21.8292C28.9461 21.9795 29.0306 22.1172 29.1398 22.234C29.249 22.3509 29.3806 22.4446 29.5267 22.5095C29.6729 22.5744 29.8307 22.6092 29.9906 22.6117C30.9858 22.6641 31.6215 22.9641 32.0215 23.3665C32.4239 23.7713 32.7239 24.4213 32.7787 25.4379C32.7817 25.5977 32.8168 25.7552 32.8819 25.9011C32.9471 26.047 33.0409 26.1783 33.1579 26.2872C33.2748 26.3961 33.4125 26.4803 33.5627 26.5348C33.7129 26.5893 33.8725 26.6131 34.0321 26.6046C34.1917 26.5961 34.3479 26.5556 34.4915 26.4855C34.635 26.4153 34.763 26.317 34.8678 26.1964C34.9726 26.0757 35.052 25.9352 35.1013 25.7833C35.1506 25.6313 35.1688 25.4709 35.1549 25.3117C35.0787 23.8832 34.6311 22.6213 33.7144 21.6927C32.793 20.7641 31.5382 20.3117 30.1144 20.2355Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
