import React, { useState, useEffect } from 'react';
import {Card, Col, Row, Button} from "react-bootstrap";
import * as Api from '../../api';
import Project from './Project';
import ProjectAddForm from './ProjectAddForm';
 
const Projects = ({ portfolioOwnerId, isEditable }) => {
  const [projects, setProjects] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    Api.get("projects", portfolioOwnerId).then((res) => {
      setProjects(res.data);
    })
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
        {projects.map((project) => (
          <Project
            key={project.projectId}
            project={project}
            setProjects={setProjects}
            isEditable={isEditable}
          />
        ))}
        {isEditable && (
          <Row className="mt-3 text-center mb-4">
            <Col sm={{span: 20}}>
              <Button onClick={() => setIsAdding(true)}>+</Button>
            </Col>
          </Row>
        )}
        {isAdding && (
          <ProjectAddForm 
            portfolioOwnerId={portfolioOwnerId}
            setProjects={setProjects}
            isAdding={setIsAdding}
          />
        )}
      </Card.Body>
    </Card>
  )
}

export default Projects;