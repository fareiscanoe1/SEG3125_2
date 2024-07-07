import { Col, Form, Row } from "react-bootstrap";
import CustomButton from "../components/Button";

const ShareRecipe = () => {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div style={{ minWidth: "500px" }}>
        <h1 className="fw-bold text-center">Share Your Favorite Recipe</h1>
        <p className="text-muted fs-5">
          Fill out the form below to share your favorite recipe with our
          community
        </p>
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Your first name" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Your last name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Recipe details</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your recipe details"
            />
          </Form.Group>

          <CustomButton classes="w-full">Submit</CustomButton>
        </Form>
      </div>
    </div>
  );
};

export default ShareRecipe;
