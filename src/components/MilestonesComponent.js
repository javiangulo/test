import React from "react";
import { Row, ButtonToolbar, Button, Col, ListGroup } from "react-bootstrap";
const MilestonesComponent = ({ milestones, updateAnswer }) => {
  const answerClass = answer => {
    let res = "notAnswered";
    if (answer) {
      res = answer.toLowerCase();
    }
    return res;
  };
  const answerText = answer => {
    let res = "Not Answered";
    if (answer) {
      res = answer.toLowerCase();
    }
    return res;
  };
  const handleAnswer = (answer, index) => {
    let type = answer || "";
    switch (type) {
      case "completed":
        type = "uncompleted";
        break;
      case "uncompleted":
        type = "completed";
        break;
      default:
        type = "uncompleted";
    }
    let res = {
      answer: type,
      index
    };
    updateAnswer(res);
  };
  let List = <h4 className="col-12">There no milestones to show</h4>;
  if (milestones && milestones.length) {
    List = (
      <ListGroup className="listItems">
        {milestones.map((milestone, index) => (
          <ListGroup.Item className="item" key={milestone.id}>
            <Row>
              <Col xs={8}>
                <p className="title">{milestone.title}</p>
                <p className="description">{milestone.description}</p>
              </Col>
              <Col xs={4}>
                <ButtonToolbar className="buttonsAnswer">
                  <Button
                    onClick={() => handleAnswer(milestone.answer, index)}
                    className={`buttons ${answerClass(milestone.answer)}`}
                  >
                    {answerText(milestone.answer)}
                  </Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  return <Row className="milestonesList">{List}</Row>;
};

export default MilestonesComponent;
