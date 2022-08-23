import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          placeholder="Card Name"
        />
        <textarea
          name="cardDescription"
          data-testid="description-input"
          placeholder="Card Description"
        />
        <input
          type="number"
          name="cardAtt01"
          data-testid="attr1-input"
          placeholder="Card attribute 01"
        />
        <input
          type="number"
          name="cardAtt02"
          data-testid="attr2-input"
          placeholder="Card attribute 02"
        />
        <input
          type="number"
          name="cardAtt03"
          data-testid="attr3-input"
          placeholder="Card attribute 03"
        />
        <select name="cardSelect">
          <option value="" selected disabled>Select Card Rarity</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muitoRaro">muito raro</option>
        </select>
        <input
          type="checkbox"
          name="cardSuper"
          data-testid="trunfo-input"
        />
        Card is SuperTrunfo
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
