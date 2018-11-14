import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ContactUsButton extends Component {

  render() {
    const buttonText = this.context.text.common.contactUs;

    return (
      <button className="contact-us">
        {buttonText}
      </button>
    );
  }
}

export default ContactUsButton;

ContactUsButton.contextTypes = {
  text: PropTypes.object,
};
