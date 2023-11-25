import React from "react";
import '../styles/SkillPage.scss'

const SkillPage = () => {
  return (
    <div className="skillData">
      <div className="skillDataInfo">
        <div>
          <div className="textSkill">HTML</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "95%", backgroundColor: "blue" }}
            >
              HTML . (95%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">CSS</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "95%", backgroundColor: "green" }}
            >
              CSS . (95%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">React js</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "90%", backgroundColor: "purple" }}
            >
              React js . (90%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">Next js</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "75%", backgroundColor: "red" }}
            >
              Next js . (75%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">React Native</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "70%", backgroundColor: "maroon" }}
            >
              React Native . (70%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">Java</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "60%", backgroundColor: "teal" }}
            >
              Java . (60%)
            </div>
          </div>
        </div>

        <div>
          <div className="textSkill">Spring Boot</div>
          <div className="progress" style={{ height: "1rem" }}>
            <div
              class="progress-bar progress-bar-striped active"
              style={{ width: "60%", backgroundColor: "grey" }}
            >
              Spring Boot . (60%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
