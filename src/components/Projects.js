import { Col, Container, Tab, Nav, Row} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description here",
            imgUrl: projImg1,
        },
        {
            title: "Project 2",
            description: "Description here",
            imgUrl: projImg2,
        },
        {
            title: "Project 3",
            description: "Description here",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus orci eget neque auctor vestibulum. Duis commodo vitae magna a scelerisque. Phasellus neque felis, varius eget tincidunt ut, dictum id nulla. Fusce tristique suscipit condimentum. Suspendisse tristique euismod lorem, et luctus urna pharetra varius. Etiam eget malesuada dui. Morbi eget faucibus risus. Curabitur fermentum dui id elit tempus, vitae bibendum turpis porttitor. In tristique et metus nec iaculis. Curabitur tempus ornare porttitor. Nulla ac massa non dui molestie eleifend eu ut ex. Cras feugiat tincidunt enim, at volutpat mauris maximus vel. Cras malesuada, velit nec rhoncus sollicitudin, ex tellus auctor orci, ut vehicula lacus risus et enim. Curabitur ut consequat dui. Etiam et luctus tortor. Proin rutrum massa nisl, in efficitur nisi gravida vel.</p>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}