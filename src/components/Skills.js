import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/java.png"
import img2 from "../assets/img/python.png"
import img3 from "../assets/img/js.png"
import img4 from "../assets/img/robot.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus orci eget neque auctor vestibulum. Duis commodo vitae magna a scelerisque. Phasellus neque felis, varius eget tincidunt ut, dictum id nulla. Fusce tristique suscipit condimentum. Suspendisse tristique euismod lorem, et luctus urna pharetra varius. Etiam eget malesuada dui. Morbi eget faucibus risus. Curabitur fermentum dui id elit tempus, vitae bibendum turpis porttitor. In tristique et metus nec iaculis. Curabitur tempus ornare porttitor. Nulla ac massa non dui molestie eleifend eu ut ex. Cras feugiat tincidunt enim, at volutpat mauris maximus vel. Cras malesuada, velit nec rhoncus sollicitudin, ex tellus auctor orci, ut vehicula lacus risus et enim. Curabitur ut consequat dui. Etiam et luctus tortor. Proin rutrum massa nisl, in efficitur nisi gravida vel.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={img1} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={img2} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={img3} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={img4} alt="Image" />
                                    <h5>Machine Learning</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}