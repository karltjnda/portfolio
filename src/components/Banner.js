import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Data Analyst", "Computer Scientist"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm Karl `}</h1>
                        <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus orci eget neque auctor vestibulum. Duis commodo vitae magna a scelerisque. Phasellus neque felis, varius eget tincidunt ut, dictum id nulla. Fusce tristique suscipit condimentum. Suspendisse tristique euismod lorem, et luctus urna pharetra varius. Etiam eget malesuada dui. Morbi eget faucibus risus. Curabitur fermentum dui id elit tempus, vitae bibendum turpis porttitor. In tristique et metus nec iaculis. Curabitur tempus ornare porttitor. Nulla ac massa non dui molestie eleifend eu ut ex. Cras feugiat tincidunt enim, at volutpat mauris maximus vel. Cras malesuada, velit nec rhoncus sollicitudin, ex tellus auctor orci, ut vehicula lacus risus et enim. Curabitur ut consequat dui. Etiam et luctus tortor. Proin rutrum massa nisl, in efficitur nisi gravida vel.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}