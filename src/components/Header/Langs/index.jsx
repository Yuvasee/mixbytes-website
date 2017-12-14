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
        <Dropdown
          label={this.state.value}
          value={this.state.value}
          values={[
            {value: 'EN', label: 'EN'},
            {value: 'RU', label: 'RU'},
          ]}
          onValueChange={value => this.onLangageChange(value)}
        />
      </nav>
    );
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
