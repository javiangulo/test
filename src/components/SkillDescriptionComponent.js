import React from "react";
import { Row, ButtonToolbar, Button, Col } from "react-bootstrap";

const SkillDescriptionComponent = ({
  skill,
  skillActive,
  setSkillActive,
  type,
  setType
}) => {
  const selectedBack = `${type}Back`;
  const selectColor = `${type}Color`;

  const handleClickButton = type => {
    Object.keys(skillActive).forEach(key => {
      skillActive[key] = "";
      if (key === type) {
        skillActive[key] = "active";
      }
    });
    setSkillActive({ ...skillActive });
    setType(type);
  };
  return (
    <Row className={`descriptionSkill ${selectedBack}`}>
      <h2 className="titleText col-12">Areas</h2>
      <Col className="col-12">
        <ButtonToolbar className="buttonsSkill">
          <Button
            onClick={() => handleClickButton("physical")}
            className={`physical ${selectColor} ${skillActive.physical}`}
          >
            Physical
          </Button>
          <Button
            onClick={() => handleClickButton("socialEmotional")}
            className={`socialEmotional ${selectColor}  ${skillActive.socialEmotional}`}
          >
            Social & Emotional area
          </Button>
          <div className="borderDiv"></div>
        </ButtonToolbar>
      </Col>
      <Col className="col-12 description">
        <h3 className="titleSkill col-12">Skill: {skill.title || ""}</h3>
        <p className="col-12 textDescription">{skill.description || ""}</p>
      </Col>
    </Row>
  );
};

export default SkillDescriptionComponent;
