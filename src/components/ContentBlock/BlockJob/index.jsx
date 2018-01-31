import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class BlockJob extends Component {
  render() {
    const text = this.context.text.common;
    const {name, description, requirements, advantages, conditions} = this.props.job;

    return (
      <div className="block-job white-block">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{text.requirements}:</h4>
        <ul>
          {requirements.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h4>{text.advantages}:</h4>
        <ul>
          {advantages.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h4>{text.conditions}:</h4>
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

BlockJob.contextTypes = {
  text: PropTypes.object,
};
