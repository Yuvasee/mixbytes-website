import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContentBlock from 'components/ContentBlock';

import './styles.css';

class WorkingProcess extends Component {
  render() {
    const text = this.context.text.main;

    return (
      <ContentBlock id="wprocess" className="wp-content-block">
        <h2>{text.wprocess}</h2>

        <div className="wp-container">
          {text.wprocessSteps.map((e, i) => (
            <div className="wp-step" key={'wp-step'+i}>
              <div className="wp-step-number">
                <span>{i > 0 && '\u2192'}</span> {i+1}.
              </div>
              <div className="wp-step-text">{e}</div>
            </div>
          ))}
        </div>
      </ContentBlock>
    );
  }
}

export default WorkingProcess;

WorkingProcess.contextTypes = {
  text: PropTypes.object,
};
