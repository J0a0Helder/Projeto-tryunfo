import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Card Name:
            <input
              id="name-input"
              type="text"
              name="cardName"
              data-testid="name-input"
              placeholder="Card Name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="card-description">
            Card Description:
            <textarea
              id="card-description"
              name="cardDescription"
              data-testid="description-input"
              placeholder="Card Description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="input1">
            Attribute 01:
            <input
              id="input1"
              type="number"
              name="cardAtt01"
              data-testid="attr1-input"
              placeholder="Card attribute 01"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="input2">
            Attribute 02:
            <input
              id="input2"
              type="number"
              name="cardAtt02"
              data-testid="attr2-input"
              placeholder="Card attribute 02"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="input3">
            Attribute 03:
            <input
              id="input3"
              type="number"
              name="cardAtt03"
              data-testid="attr3-input"
              placeholder="Card attribute 03"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="image-input">
            Card Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="cardSelect">
            Card Rarity:
            <select
              name="cardSelect"
              id="cardSelect"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="" selected disabled>Select Card Rarity</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muitoRaro">muito raro</option>
            </select>
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="card-super">
            <input
              id="card-super"
              type="checkbox"
              name="cardSuper"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Card is SuperTrunfo
          </label>
        </div>

        <br />
        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
