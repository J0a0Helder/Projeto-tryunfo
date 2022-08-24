import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/card.css';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const verify = (trunfo) => {
      if (trunfo === true) return <h3 data-testid="trunfo-card">Super Trunfo</h3>;
    };
    return (
      <div className="card-container">
        <div className="card">
          <div className="top-card">
            <h2 data-testid="name-card" className="card-title">{cardName}</h2>
          </div>
          <div>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="image-card"
            />
            <p data-testid="description-card" className="info-card">{cardDescription}</p>
          </div>
          <div className="bottom-card">
            <h3 data-testid="attr1-card" className="attr">
              Attack.........
              {cardAttr1}
            </h3>
            <h3 data-testid="attr2-card" className="attr">
              Defense........
              {cardAttr2}
            </h3>
            <h3 data-testid="attr3-card" className="attr">
              Speed...........
              {cardAttr3}
            </h3>
          </div>
          <h4 data-testid="rare-card" className="rare-card">{cardRare}</h4>
          {verify(cardTrunfo)}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
