import * as React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class PopupContent extends React.Component {

  render() {
    const { props } = this;

    return (
      <div className="popupContentContainer">
        {props.values.map((value, index) => {
          const active = props.value != null && props.value.indexOf(value) >= 0;
          const selected = props.selectedValue != null && props.selectedValue.indexOf(value) >= 0;

          return (
            <div
              key={`${value.value}-${index}`}
              onMouseDown={event => event.preventDefault()}
              onClick={() => props.onValueClick(value)}
              onMouseOver={() => props.onValueMouseOver(value)}
              className={[
                'popupElement',
                active ? 'popupElement--active' : '',
                selected ? 'popupElement--selected' : '',
                props.popupElementClassName
              ].join(' ')}
            >
              {value.label}
            </div>
          );
        })}
      </div>
    );
  }
}

PopupContent.propTypes = {
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,

  onValueMouseOver: PropTypes.func,
  onValueClick: PropTypes.func,

  popupElementClassName: PropTypes.string,
}
