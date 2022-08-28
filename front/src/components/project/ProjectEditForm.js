import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import * as Api from '../../api';
import DatePicker from "react-datepicker";

const ProjectEditForm = ({currentProject, setProjects, setIsEditing}) => {
  const [title, setTitle] = useState(currentProject.title);
  const [description, setDescription] = useState(currentProject.description);
  const [startDate, setStartDate] = useState(new Date(currentProject.startDate));
  const [endDate, setEndDate] = useState(new Date(currentProject.endDate));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = currentProject.userId;
    const projectId = currentProject.projectId;

    await Api.put(`projects/${currentProject.projectId}`, {
      projectId,
      title,
      description,
      startDate,
      endDate
    });

    const res = await Api.get("projects", userId);
    setProjects(res.data);
    setIsEditing(false);
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProjectTitle">
        <Form.Control 
          type="text" 
          placeholder="프로젝트 제목" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formProjectDescription">
        <Form.Control 
          type="text" 
          placeholder="상세내역" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>

      <Row className="mt-3 mb-3">
        <Form.Group sm="auto" as={Col} className="me-3">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            value={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </Form.Group>
        <Form.Group sm="auto" as={Col}>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            value={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            // mindate로 시작날짜보다 이전으로 설정 안 되게
            minDate={startDate}
          />
        </Form.Group>
      </Row>

      <Form.Group as={Row} className="mt-3 mb-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">확인</Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>취소</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ProjectEditForm;