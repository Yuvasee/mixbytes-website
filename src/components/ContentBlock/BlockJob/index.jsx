import React, {Component} from 'react';

import './styles.css';

class BlockJob extends Component {
  render() {
    const {name, description, requirements, advantages, conditions} = this.props.job;
    return (
      <div className="block-job">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Требования:</h3>
        <ul>
          {requirements.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h3>Будет плюсом:</h3>
        <ul>
          {advantages.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h3>Условия:</h3>
        <ul>
          {conditions.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlockJob;
