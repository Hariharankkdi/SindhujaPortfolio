import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Airpods from '../assets/img/airpods.png'
import Petshop from '../assets/img/pets.png'
import NavBar from '../assets/img/NavBar.png'
import Netflix from '../assets/img/Netflix.png'
import WireFraming from '../assets/img/Wireframing.png'
import Portfolio from '../assets/img/Portfolio.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Apple Airpods Design",
      description: "Design & Development",
      imgUrl: Airpods,
      Link:"https://www.figma.com/file/dDcKYWwLgtlgnspLKO8wr6/Portfolio?type=design&node-id=259-124&mode=design&t=lq4R5LVg8cs7x3EB-0"
    },
    {
      title: "Logo Design",
      description: "Pet Shop Logo",
      imgUrl: Petshop,
      Link:"https://www.figma.com/proto/zi9BoZCoKe7QaF11VYVijc/Untitled?type=design&node-id=166-254&t=36fmlQB9DaNVOSwu-0&scaling=min-zoom&page-id=0%3A1"
    },
    {
      title: "Netflix Web Design",
      description: "Netflix Web Design",
      imgUrl: Netflix,
      Link:"https://www.figma.com/proto/zi9BoZCoKe7QaF11VYVijc/Untitled?type=design&node-id=82-25&t=GClEgmXI330VZUYs-0&scaling=scale-down&page-id=72%3A9&starting-point-node-id=82%3A25&show-proto-sidebar=1"
    },
    {
      title: "WireFraming",
      description: "WireFraming for mobile app",
      imgUrl: WireFraming,
      Link:"https://www.figma.com/file/zi9BoZCoKe7QaF11VYVijc/Untitled?type=design&node-id=26-9&mode=design&t=uC5r2suZzN4h2luC-0"
    },
    {
      title: "Mobile App Design",
      description: "Mobile App Design",
      imgUrl: NavBar,
      Link:"https://www.figma.com/proto/zi9BoZCoKe7QaF11VYVijc/Untitled?type=design&node-id=4-92&t=36fmlQB9DaNVOSwu-0&scaling=min-zoom&page-id=0%3A1"
    },
    {
      title: "Personal Portfolio",
      description: "Personal Portfolio",
      imgUrl: Portfolio,
      Link:"https://www.figma.com/file/zi9BoZCoKe7QaF11VYVijc/Untitled?type=design&node-id=166-184&mode=design&t=mzvw5DYLxpL5QYbg-0"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                I've been actively involved in several UI/UX projects. These experiences have allowed me to apply my design skills in real-world scenarios, shaping user interfaces and experiences that cater to the specific needs of each project. Working on these projects has given me valuable insights into creating designs that balance aesthetics and usability. I've had the opportunity to develop wireframes, prototypes, and mockups, all of which play a crucial role in the design process. Additionally, I've conducted user research and usability testing to gather feedback and refine the designs, ensuring that they meet or exceed user expectations. These projects have equipped me with practical experience in the UI/UX field, which I'm eager to apply to future endeavors and continue to enhance my skills.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Implementations</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Web Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Design</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
