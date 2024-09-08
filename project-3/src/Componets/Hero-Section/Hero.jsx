import { Col, Container, Row } from 'react-bootstrap'
import './hero.scss'
import React from 'react'
import heroimg from '../../assets/hero-image.png'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Container>
                <Row>


                    <Col sm={12} lg={6}>
                        <div className="body-left">
                            <h4>Best Destinations around the world</h4>
                            <h1>Travel, enjoy
                                and live a new
                                and full life</h1>
                            <p>Built Wicket longer admire do barton vanity itself do in it.
                                Preferred to sportsmen it en grossed listening. Park gate sell they west hard for the.</p>

                            <div className="hero-Bottun">
                                <button className='btns'> Find More ..</button>
                            </div>
                        </div>
                    </Col>


                    <Col sm={12} lg={6}>
                        <div className="hero-right">
                            <div className="hero-img">
                                <img className='hero-imgs' src={heroimg} alt=" hero img" />
                            </div>
                        </div>

                    </Col>


                </Row>
            </Container>


        </div>
    )
}

export default Hero
