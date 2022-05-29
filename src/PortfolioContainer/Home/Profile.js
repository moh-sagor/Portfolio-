import React from "react";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://web.facebook.com/md.sagor.rzs/" target="_blank">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/moh-sagor" target="_blank">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://twitter.com/s0707Sagor" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, I'M <span className="highlighted-text">Sagor</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                steps={["Hello", 1000, "Hello world!", 500]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>
            <h1></h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
