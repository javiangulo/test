import React from "react";
import { Container, Row, ButtonToolbar, Button, Col } from "react-bootstrap";
import "./styles/style.scss";

const ShowSkill = () => {
  const [selectedBack, setSelectedBack] = React.useState("physicalBack");
  const [selectColor, setSelectedColor] = React.useState("physicalColor");
  const [skillActive, setSkillActive] = React.useState({
    physical: "active",
    socialEmotional: ""
  });

  const handleClickButton = type => {
    setSelectedBack(`${type}Back`);
    setSelectedColor(`${type}Color`);
    Object.keys(skillActive).forEach(key => {
      skillActive[key] = "";
      if (key === type) {
        skillActive[key] = "active";
      }
    });
    setSkillActive({ ...skillActive });
  };
  return (
    <Container className="main">
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
          <h3 className="titleSkill col-12">
            Skill: ahsjhajshjahsj jhaj shjas jhasj
          </h3>
          <p className="col-12 textDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </Col>
      </Row>
      <Row>asas</Row>
      <Row>
        <Col className="col-12">
          <ButtonToolbar className="buttonsSkill">
            <Button className="buttons step">Physical</Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowSkill;
