import * as React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

export class OutsideClick extends React.PureComponent {

  componentDidMount() {
    const node = findDOMNode(this);

    this.clickHandler = (event) => {
      const target = event.target;

      if (target !== node && !node.contains(target)) {
        this.props.onOutsideClick();
      }
    };

    window.document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.clickHandler);
  }

  render() {
    const args = [
      this.props.rootElement,
      {},
    ].concat(this.props.children);

    return React.cloneElement.apply(null, args);
  }
}

OutsideClick.propTypes = {
  onOutsideClick: PropTypes.func.isRequired,
  rootElement: PropTypes.element,
}

OutsideClick.defaultProps = {
  rootElement: <div />,
}
