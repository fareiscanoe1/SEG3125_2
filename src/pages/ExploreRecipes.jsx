import { Col, Nav, Row, Tab } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import food from "../images/food.jpg";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import food9 from "../images/food9.jpg";
import food10 from "../images/food10.jpg";
import food11 from "../images/food11.jpg";
import food12 from "../images/food12.jpg";
import food13 from "../images/food13.jpg";

const foodsList = [
  {
    id: 1,
    name: "Spaghetti and Meatball",
    info: "A classic Italian pasta dish",
    img: food,
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    info: "Quick and healthy vegetable stir fry",
    img: food1,
  },
  {
    id: 3,
    name: "Beef Tacos De lengua",
    info: "Delicious beef tacos with a twist",
    img: food2,
  },
  {
    id: 4,
    name: "Tiramisu",
    info: "A classic Italian dessert",
    img: food3,
  },
];

const foodsList1 = [
  {
    id: 1,
    name: "Spaghetti and Meatball",
    info: "A classic Italian pasta dish",
    img: food4,
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    info: "Quick and healthy vegetable stir fry",
    img: food5,
  },
  {
    id: 3,
    name: "Beef Tacos De lengua",
    info: "Delicious beef tacos with a twist",
    img: food6,
  },
  {
    id: 4,
    name: "Tiramisu",
    info: "A classic Italian dessert",
    img: food7,
  },
];

const foodsList2 = [
  {
    id: 1,
    name: "Spaghetti and Meatball",
    img: food8,
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    img: food9,
  },
  {
    id: 3,
    name: "Beef Tacos De lengua",
    img: food10,
  },
  {
    id: 4,
    name: "No Bake Brownies",
    img: food11,
  },
  {
    id: 5,
    name: "Shrimp Tacos",
    img: food12,
  },
  {
    id: 6,
    name: "Caprese Salad",
    img: food13,
  },
];

const ExploreRecipes = () => {
  return (
    <div className="mt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={4} className="pe-5">
            <h1 className="fs-5 fw-bolder">MyRecipeBook</h1>
            <div className="d-flex align-content-center gap-3 mt-5 nav-bg">
              <FiHome className="mt-1" />
              Home
            </div>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Appetizers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Main Course</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="d-flex align-content-center gap-3 mt-3 nav-bg">
              <CgMenuLeft className="mt-1" />
              Cuisines
            </div>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="third">Italian</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Chinese</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          {/* ---------Tab content------- */}
          <Col sm={8}>
            <h1 className="fs-3 fw-bolder">Explore Our Famous Recipes</h1>
            <p className="text-muted mt-1">
              Discover a variety of recipes to suit every taste and occasion
            </p>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {foodsList.map((item) => (
                    <Col lg={3}>
                      <Link to="/recipe-details">
                        <div style={{ width: "100%", height: "180px" }}>
                          <img
                            src={item.img}
                            alt="food"
                            className="img-fluid object-fit-cover h-100 rounded"
                          />
                        </div>
                        <h1 className="fs-6 mt-3">{item.name}</h1>
                        <p className="text-muted" style={{ fontSize: "13px" }}>
                          {item.info}
                        </p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              {/* --------Second Tab-------- */}
              <Tab.Pane eventKey="second">
                <Row>
                  {foodsList1.map((item) => (
                    <Col lg={3}>
                      <Link to="/recipe-details">
                        <div style={{ width: "100%", height: "180px" }}>
                          <img
                            src={item.img}
                            alt="food"
                            className="img-fluid object-fit-cover h-100 rounded"
                          />
                        </div>
                        <h1 className="fs-6 mt-3">{item.name}</h1>
                        <p className="text-muted" style={{ fontSize: "13px" }}>
                          {item.info}
                        </p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              {/* --------Third Tab-------- */}
              <Tab.Pane eventKey="third">
                <Row>
                  {foodsList.map((item) => (
                    <Col lg={3}>
                      <Link to="/recipe-details">
                        <div style={{ width: "100%", height: "180px" }}>
                          <img
                            src={item.img}
                            alt="food"
                            className="img-fluid object-fit-cover h-100 rounded"
                          />
                        </div>
                        <h1 className="fs-6 mt-3">{item.name}</h1>
                        <p className="text-muted" style={{ fontSize: "13px" }}>
                          {item.info}
                        </p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              {/* --------Fourth Tab-------- */}
              <Tab.Pane eventKey="fourth">
                <Row>
                  {foodsList1.map((item) => (
                    <Col lg={3}>
                      <Link to="/recipe-details">
                        <div style={{ width: "100%", height: "180px" }}>
                          <img
                            src={item.img}
                            alt="food"
                            className="img-fluid object-fit-cover h-100 rounded"
                          />
                        </div>
                        <h1 className="fs-6 mt-3">{item.name}</h1>
                        <p className="text-muted" style={{ fontSize: "13px" }}>
                          {item.info}
                        </p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>

            <div className="mt-5">
              <h1 className="fs-3 fw-bolder">Explore Our Time saver Recipes</h1>
              <p className="text-muted mt-1">
                Quick and easy recipes for your busy lifestyle
              </p>
              <Row>
                {foodsList2.map((item) => (
                  <Col lg={2}>
                    <Link to="/recipe-details">
                      <div style={{ width: "100%", height: "120px" }}>
                        <img
                          src={item.img}
                          alt="food"
                          className="img-fluid object-fit-cover h-100 rounded"
                        />
                      </div>
                      <h1 className="fs-6 mt-3">{item.name}</h1>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        {item.info}
                      </p>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ExploreRecipes;
