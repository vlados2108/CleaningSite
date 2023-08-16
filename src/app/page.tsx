import "../styles/css/style.css";
import Image from "next/image";

export default function Home() {
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
            </div>

            {/* <Image className="first-image" src="/first.jpg" width={689} height={699}alt="empty"/>   */}
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
        
      </div>
    </div>
  );
}
