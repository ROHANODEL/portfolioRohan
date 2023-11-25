import React from "react";
import Resume from "../image/Resume.pdf";
import CoverLetter from "../image/Cover_Letter.pdf";
import "../styles/ResumePage.scss";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumePage = () => {
  return (
    <div className="resumeData">
      <a
        href={Resume}
        download="Resume-Rohan_odel"
        target="_blank"
        rel="noreferrer"
        style={{marginBottom:'3rem'}}
      >
        <div className="resumeCard">
          <div>
            <div className="download">Download</div>
            <div>Resume</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faDownload} className="downloadIcon"/>
          </div>
        </div>
      </a>

      <a
        href={CoverLetter}
        download="Cover-letter-Rohan_odel"
        target="_blank"
        rel="noreferrer"
      >
        <div className="resumeCard">
          <div>
            <div className="download">Download</div>
            <div>Cover Letter</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faDownload} className="downloadIcon"/>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResumePage;
