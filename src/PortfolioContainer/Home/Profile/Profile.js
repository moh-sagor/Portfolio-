import React from "react";
import Typical from "react-typical";
import './Profile.css';
import { Button } from "react-bootstrap";


export default function Footer() {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
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
                  loop={Infinity}
                  steps={[" Ethusiastic Developer 😎", 2000,
                    "Full Stack Developer 💝", 2000,
                    "React.js Developer 💕", 2000,
                    "Django Developer 💖", 2000,
                    "Cross Platform Developer 🌹 ", 2000,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Button className="btn">
              {""}
              Hire Me{""}
            </Button>
            <a href="Md_Sagor_Hossain.pdf" download='Md_Sagor_Hossain.pdf'>
              <Button className='btn_1'>
                Get Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
