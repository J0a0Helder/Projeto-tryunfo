import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    hasTrunfo: false,
  };

  validation = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const maxCaracteres = 210;
    const maxAttrCaracteres = 90;

    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxCaracteres
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= maxAttrCaracteres
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= maxAttrCaracteres
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= maxAttrCaracteres) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (obj) => {
    if (obj.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState(
      (prevState) => ({
        data: [...prevState.data, obj] }),
      () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardRare: 'normal',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
        });
      },
    );
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.validation(); });
  };

  removeCard = (index) => {
    // Usei este video para realizar esse requisito: https://www.youtube.com/watch?v=y8ckoDFXdVE
    const { data } = this.state;
    data.slice();
    data.splice(index, 1);
    this.setState({ data });
    this.setState((prevState) => ({
      hasTrunfo: prevState.data.some((card) => card.cardTrunfo === true),
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      data,
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <section>
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
        </section>

        <section>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>

        <section>
          {
            data.map((element, index) => (
              <>
                <Card
                  cardName={ element.cardName }
                  cardDescription={ element.cardDescription }
                  cardAttr1={ element.cardAttr1 }
                  cardAttr2={ element.cardAttr2 }
                  cardAttr3={ element.cardAttr3 }
                  cardImage={ element.cardImage }
                  cardRare={ element.cardRare }
                  cardTrunfo={ element.cardTrunfo }
                  key={ element.cardName }
                />

                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(index) }
                >
                  Excluir
                </button>

              </>
            ))
          }
        </section>
      </>
    );
  }
}

export default App;
