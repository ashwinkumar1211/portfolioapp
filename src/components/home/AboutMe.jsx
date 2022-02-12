import React from "react";
import {
  aboutHeading,
  aboutDescription,
  resumeLink
} from "../../editable-stuff/configurations.json";

import emoji from "react-easy-emoji";

const AboutMe = () => {

  return (
    <div id="aboutme" className=" m-0 " style={{ paddingTop: "30px" }}>
      
      <div className="p-5">
        <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
        <div className="row">
          <div className="col-md-5 mt-5">
            <p className="lead text-center"><span>Hi!</span><span className="wave-emoji">{emoji("👋")}</span>{aboutDescription}</p>
            {resumeLink && (
              <p className="lead text-center">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  <div class="btn-custom btn-two">
                    <span>Resume</span>
                  </div>
                </a>
              </p>
            )}
          </div>
          <div className="col-md-7">
              <img className="aboutMe-avatar-sizing" src={'programmer.svg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
