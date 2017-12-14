import * as React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Popup extends React.Component {
  render() {
    const { props } = this;

    return (
      <div
        className={[
          'popupContainer',
          props.popupContainerClassName,
        ].join(' ')}
      >
        <div className="containerCorner"></div>
        {props.children}
      </div>
    );
  }
}

Popup.propTypes = {
  arrow: PropTypes.oneOf(['NONE', 'LEFT', 'CENTER', 'RIGHT']),
  popupContainerClassName: PropTypes.string,
}

Popup.defaultProps = {
  arrow: 'NONE',
}
