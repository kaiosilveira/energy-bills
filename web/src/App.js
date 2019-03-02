import React, { Component } from 'react';
import './App.css';

const Actions = ({ firstButtonText, secondButtonText }) => (
    <div className="actions">
      <button className="btn-primary">
          {firstButtonText}
      </button>
      <button className="btn-primary">
          {secondButtonText}
        </button>
    </div>
)

const brazilianStates = [
  { name: 'Acre', initials: 'AC' },
  { name: 'Alagoas', initials: 'AL' },
  { name: 'Amapá', initials: 'AP' },
  { name: 'Amazonas', initials: 'AM' },
  { name: 'Bahia', initials: 'BA' },
  { name: 'Ceará', initials: 'CE' },
  { name: 'Distrito Federal', initials: 'DF' },
  { name: 'Espírito Santo', initials: 'ES' },
  { name: 'Goiás', initials: 'GO' },
  { name: 'Maranhão', initials: 'MA' },
  { name: 'Pará', initials: 'PA' }, 
  { name: 'Mato Grosso', initials: 'MT' },
  { name: 'Minas Gerais', initials: 'MG' },
  { name: 'Mato Grosso do Sul', initials: 'MS' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Energy Bills</h1>

        <Actions firstButtonText="Calcular" secondButtonText="Gráficos"/>

        <div className="options">
          <select className="select-box width-one-third">
            <option value="">Estado</option>
              {brazilianStates.map(state => (
                <option key={state.initials} value={state.initials}>{state.name}</option>
              ))}
          </select>
          <select className="select-box width-one-third">
            <option value="">Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
          </select>
          <div className="input-wrapper width-one-third">
            <input className="input" type="number" placeholder="KWH"/>
          </div>
        </div>

        <div className="calculate-btn-wrapper">
          <button className="calculate-btn">Calcular</button>
        </div>

        <div className="card result">
          <span>Valor aproximado</span>
          <span className="amount">R$300,00</span>
        </div>

      </div>
    );
  }
}

export default App;
