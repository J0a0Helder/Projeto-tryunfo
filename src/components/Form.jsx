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
              min="0"
              max="90"
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="input2">
            Attribute 02:
            <input
              id="input2"
              min="0"
              max="90"
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="input3">
            Attribute 03:
            <input
              id="input3"
              min="0"
              max="90"
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
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
              name="cardImage"
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
          <label htmlFor="card-select">
            Card Rarity:
            <select
              name="cardRare"
              data-testid="rare-input"
              id="card-select"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="trunfo-input">
            <input
              id="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
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
            name="saveButton"
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
