import React from 'react';

import { Dropdown } from '../../common/Dropdown/index';
import { getLanguage, setLanguage } from '../../../helpers/language';

import './styles.css';

class Langs extends React.Component {

  constructor(props) {
    super();

    const currentLanguage = getLanguage();

    this.state = { value: currentLanguage };
  }

  render() {
    return (
      <nav className="langs">
        <button
          className="languageButton"
          onClick={() => this.toggleLanguage()}
        >
          {this.state.value === 'RU' ? 'EN' : 'RU'}
        </button>

        {/*
        for multiple languages
        <Dropdown
          label={this.state.value}
          value={this.state.value}
          values={[
            {value: 'EN', label: 'EN'},
            {value: 'RU', label: 'RU'},
          ]}
          onValueChange={value => this.onLangageChange(value)}
        />
        */}
      </nav>
    );
  }

  toggleLanguage() {
    const newLanguage = this.state.value === 'RU' ? 'EN' : 'RU';

    this.setState({ value: newLanguage });
    setLanguage(newLanguage);
    window.location.reload();
  }

  onLangageChange(language) {
    if (this.state.value === language) {
      return;
    }

    this.setState({ value: language });
    setLanguage(language);
    window.location.reload();
  }
}

export default Langs;
