import { Container } from 'react-bootstrap'
import './card.scss'
import React from 'react'
import plane from '../../assets/plane.png'
import mus from '../../assets/mus.png'
import setting from '../../assets/setting.png'
import dish from '../../assets/dish.png'
const Cards = () => {
  return (
    <div className='cards'>
      <Container>
        <h5>CATEGORY</h5>
        <h3 className='heding'>We Offer Best Services </h3>

        <div className="cardBody">

          <div className="card-containers">
            <div className="card-img">
            <img src={dish} alt=" dish images" />
            </div>
            <h6>Calculated Weather </h6>
            <p>Built Wicket longer admire do
              barton vanity itself do in it.</p>


          </div>

          <div className="card-containers">
            <div className="card-img">
              <img src={plane} alt=" plane images" />
            </div>
            <h6> Best Flights</h6>
            <p>
            Engrossed listening. Park gate sell they west hard for the.</p>

          </div>

          <div className="card-containers">
            <div className="card-img">
              <img src={mus} alt="  Music images" />
            </div>
            <h6> Local Events</h6>
            <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>

          </div>
          <div className="card-containers">
            <div className="card-img">
            <img src={setting} alt=" settige images" />
            </div>
            <h6>Customization </h6>
            <p>We deliver outsourced
aviation services for
military custo      mers</p>


          </div>

        </div>


      </Container>

    </div>
  )
}

export default Cards
