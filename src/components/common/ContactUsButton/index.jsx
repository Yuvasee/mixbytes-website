import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BigButton from 'components/common/BigButton';

class ContactUsButton extends Component {

  render() {
    const buttonText = this.context.text.common.contactUs;

    return (
      <BigButton>{buttonText}</BigButton>
    );
  }
}

export default ContactUsButton;

ContactUsButton.contextTypes = {
  text: PropTypes.object,
};
