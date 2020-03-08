import React from "react";
import { connect } from "react-redux";
import { Container, Row, ButtonToolbar, Button, Col } from "react-bootstrap";
import "./styles/style.scss";
import {
  getDataSkill2,
  getDataSkill23,
  updateAnswer2,
  updateAnswer23
} from "../actions";
import SkillDescriptionComponent from "../components/SkillDescriptionComponent";
import _ from "lodash";
import MilestonesComponent from "../components/MilestonesComponent";
const ShowSkill = ({
  skill2,
  getDataSkill2,
  skill23,
  getDataSkill23,
  updateAnswer2,
  updateAnswer23
}) => {
  const [skillActive, setSkillActive] = React.useState({
    physical: "active",
    socialEmotional: ""
  });
  const [type, setType] = React.useState("physical");
  const buttomText = {
    physical: "next",
    socialEmotional: "Finish Accessment"
  };
  let updateAnswer = updateAnswer2;
  let data = {};
  data = skill2.data || {};
  if (type === "socialEmotional") {
    updateAnswer = updateAnswer23;
    data = skill23.data || {};
  }
  let infoSkill = data.skill || {};

  if (_.isEmpty(skill2)) {
    getDataSkill2();
  }
  if (_.isEmpty(skill23)) {
    getDataSkill23();
  }
  const handleStepClick = () => {
    if (type === "physical") {
      setType("socialEmotional");
      Object.keys(skillActive).forEach(key => {
        skillActive[key] = "";
        if (key === "socialEmotional") {
          skillActive[key] = "active";
        }
      });
      setSkillActive({ ...skillActive });
    }
  };
  return (
    <Container className="main">
      <SkillDescriptionComponent
        skill={infoSkill}
        skillActive={skillActive}
        setSkillActive={setSkillActive}
        type={type}
        setType={setType}
      />
      <MilestonesComponent
        milestones={infoSkill.milestones}
        updateAnswer={updateAnswer}
      />
      <Row>
        <Col className="col-12">
          <ButtonToolbar className="buttonsSkill">
            <Button className="buttons step" onClick={() => handleStepClick()}>
              {buttomText[type]}
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ skill2, skill23 }) => {
  return {
    skill2,
    skill23
  };
};

export default connect(mapStateToProps, {
  getDataSkill2,
  getDataSkill23,
  updateAnswer2,
  updateAnswer23
})(ShowSkill);
