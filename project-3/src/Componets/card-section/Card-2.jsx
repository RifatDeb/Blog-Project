import './card-2.scss'
import React from 'react'
import { Container } from 'react-bootstrap'
import Card4 from '../../assets/card-4.png'
import Card5 from '../../assets/card-2.png'
import Card3 from '../../assets/card-3.png'
import icon from '../../assets/icon.png'

const Card2 = () => {
  return (
    <div className='cards2'>
      <Container>
        <h5>Top Selling</h5>
        <h3 className='heding'> Top Destinations</h3>
        <div className="cardBody-2">

          <div className="card-containers-2">
            <div className="card-2-img">
              <img className='imgs' src={Card4} alt=" dish images" />
            </div>
            <div className='card-2dess'>
              <div>
                <p>Rome, Italty</p>
              </div>
              <div className='rate'>
                <p> <samp>$</samp> 5.42k</p>
              </div>
            </div>
          <div className="card-footer">
            <img src={icon} alt=" icon" />
            <p>10 days Tipe </p>
          </div>

          </div>




          <div className="card-containers-2">
            <div className="card-2-img">
              <img className='imgs' src={Card5} alt=" dish images" />
            </div>
            <div className='card-2dess'>
              <div>
                <p>Rome, Italty</p>
              </div>
              <div className='rate'>
                <p> <samp>$</samp> 5.42k</p>
              </div>
            </div>
            <div className="card-footer">
            <img src={icon} alt=" icon" />
            <p>10 days Tipe </p>
          </div>

          </div>

          <div className="card-containers-2">
            <div className="card-2-img">
              <img className='imgs' src={Card3} alt=" dish images" />
            </div>
            <div className='card-2dess'>
              <div>
                <p>Rome, Italty</p>
              </div>
              <div className='rate'>
                <p> <samp>$</samp> 5.42k</p>
              </div>
            </div>
            <div className="card-footer">
            <img src={icon} alt=" icon" />
            <p>10 days Tipe </p>
          </div>

          </div>
        

        </div>

      </Container>

    </div>

  )
}

export default Card2
