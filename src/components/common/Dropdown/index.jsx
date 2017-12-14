import * as React from 'react';
import PropTypes from 'prop-types';

import { getKeyboardEventCode } from '../../../helpers/events';
import { OutsideClick } from '../OutsideClick';
import { Popup } from '../Popup';
import { PopupContent } from '../PopupContent';

import './index.css';

export class Dropdown extends React.Component {

  constructor(props) {
    super();

    this.state = {
      opened: false,
      selectedIndex: null,
    };
  }

  render() {
    const { props, state } = this;

    const {
      activeValue,
      selectedValue,
    } = this.calculateValues();

    return (
      <OutsideClick
        onOutsideClick={() => this.close()}
        rootElement={
          <div
            className={[
              'dropdownContainer',
              this.state.opened ? 'dropdownContainer--opened' : '',
              props.containerClassName,
            ].join(' ')}
          />
        }
      >
        <button
          ref={button => this.button = button}
          onClick={() => this.toggleOpened()}
          onKeyDown={event => this.handleKeyDown(event)}
          className={[
            'dropdownButton',
            this.props.buttonClassName,
          ].join(' ')}
        >
          {this.props.label}
        </button>

        {
          this.state.opened &&
          <Popup>
            <PopupContent
              value={activeValue}
              values={this.props.values}
              selectedValue={selectedValue}
              onValueClick={value => this.handleValueClick(value)}
              onValueMouseOver={value => this.handleValueMouseOver(value)}
            />
          </Popup>
        }
      </OutsideClick>
    );
  }

  focus() {
    this.button.focus();
    this.open();
  }

  blur() {
    this.button.blur();
    this.close();
  }

  toggleOpened() {
    if (this.state.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  handleValueMouseOver(value) {
    const index = this.props.values.indexOf(value);
    const selectedIndex = index >= 0 ? index : null;

    this.setState({ selectedIndex });
  }

  handleKeyDown(event) {
    const nativeEvent = event.nativeEvent;
    const code = getKeyboardEventCode(nativeEvent);

    if (code === 'Escape') {
      this.close();
      return;
    }

    switch (code) {
      case 'ArrowDown':
      case 'Down':
        event.preventDefault();
        this.incrementSelectedIndex();
        break;

      case 'ArrowUp':
      case 'Up':
        event.preventDefault();
        this.decrementSelectedIndex();
        break;

      case 'NumpadEnter':
      case 'Enter':
        event.preventDefault();
        if (typeof this.state.selectedIndex === 'number') {
          this.handleValueClick(this.props.values[this.state.selectedIndex]);
        }
        break;

      default:
        break;
    }
  }

  handleValueClick(value) {
    this.props.onValueChange(value.value);
    this.close();
  }

  close() {

    this.button.blur();

    this.setState({
      opened: false,
      selectedIndex: null,
    });
  }

  open() {
    this.button.focus();

    const selectedValue = this.props.values
      .filter((value) => value.value === this.props.value)
      .shift();

      const selectedIndex = this.props.values.indexOf(selectedValue);

    this.setState({
      opened: true,
      selectedIndex: selectedIndex >= 0 ? selectedIndex : null,
    });
  }

  calculateValues() {
    const convertedValue = [this.props.value];

    const activeValue = this.props.values
      .filter(value => convertedValue.indexOf(value.value) >= 0);

    let selectedValue = [];

    if (typeof this.state.selectedIndex === 'number') {
      selectedValue = [
        this.props.values[this.state.selectedIndex],
      ];
    }

    return {
      activeValue,
      selectedValue,
    };
  }

  incrementSelectedIndex() {
    let selectedIndex = typeof this.state.selectedIndex !== 'number'
      ? 0
      : this.state.selectedIndex + 1;

    this.setSelectedIndex(selectedIndex);
  }

  decrementSelectedIndex() {
    let selectedIndex = typeof this.state.selectedIndex !== 'number'
      ? this.props.values.length - 1
      : this.state.selectedIndex - 1;

    this.setSelectedIndex(selectedIndex);
  }

  setSelectedIndex(selectedIndex) {
    if (selectedIndex < 0) {
      selectedIndex = 0;
    }

    if (selectedIndex >= this.props.values.length) {
      selectedIndex = this.props.values.length - 1;
    }

    this.setState({
      selectedIndex,
    });
  }
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onValueChange: PropTypes.func,

  required: PropTypes.bool,
  label: PropTypes.string,

  buttonClassName: PropTypes.string,
  containerClassName: PropTypes.string,
}
