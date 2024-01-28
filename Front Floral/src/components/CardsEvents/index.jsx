import React from 'react'
import "./style.scss"
function CardsEvents() {
  return (
    <div className="backImageEvents">
    <div className="headerEvents">
      <p>Devoted to wonderful beauty</p>
      <h1>Events Pricing</h1>
    </div>
    <div className="cardsContainerEvents">
      <div className="cardsEvents">
  <div className="cardEvents">
    <p className='price'>$16<span> per table</span></p>
    <h3>Birthday Events</h3>
    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
    <button>Shop now</button>
  </div>
  <div className="cardEvents">
  <p className='price'>$13<span> per table</span></p>
    <h3>Wedding Events</h3>
    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
    <button>Shop now</button>
  </div>
  <div className="cardEvents">
  <p className='price'>$43<span> per table</span></p>
    <h3>Party Events</h3>
    <p >Lorem ipsum dolor sit amet laudem partem perfecto per</p>
    <button>Shop now</button>
  </div>
      </div>
    </div>
  </div>
  )
}

export default CardsEvents