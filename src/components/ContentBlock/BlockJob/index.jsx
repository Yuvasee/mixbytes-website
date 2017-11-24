import React, {Component} from 'react';

import './styles.css';

class BlockJob extends Component {
  render() {
    const {name, description, requirements, advantages, conditions} = this.props.job;
    return (
      <div className="block-job white-block">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Требования:</h4>
        <ul>
          {requirements.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h4>Будет плюсом:</h4>
        <ul>
          {advantages.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h4>Условия:</h4>
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
