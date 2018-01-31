import React from 'react';
import PropTypes from 'prop-types';

import api from '../../helpers/api';
import { validateEmailFormat, validateMessage } from '../../helpers/validators'

import './styles.css';

const LS_MESSAGE_PARAM = 'feedbackMessage';

export class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contact: '',
      message: '',
      isContactValid: false,
      isMessageValid: false,
      success: false
    };
  }

  componentDidMount() {
    const savedMessage = localStorage[LS_MESSAGE_PARAM];

    if (savedMessage) {
      this.setState({message: savedMessage});
    }
  }

  render () {
    const text = this.context.text.feedback;
    const { containerStyle } = this.props;
    const { isContactValid, isMessageValid, message, contact, success } = this.state;

    const isFormValid = isContactValid && isMessageValid;

    return (
      <div
        className={`feedbackForm-container ${containerStyle ? containerStyle : ''}`}
      >
        <h2 className="feedbackForm-title">
          { success ? text.messageSent : text.writeToUs }
        </h2>

        {
          !success &&
          <form
            className="feedbackForm-form"
            onSubmit={this.handleSubmit}
          >

            <textarea
              id="messages"
              rows="5"
              value={message}
              placeholder={text.messagePlaceholder}
              onChange={this.handleChangeMessage}
              className={`form-control feedbackForm-control feedbackForm-textarea`}
            ></textarea>

            <div className="feedbackForm-row">
              <input
                type="text"
                id="contact"
                placeholder={text.emailPlaceholder}
                onChange={this.handleChangeContact}
                className={`form-control feedbackForm-control`}
              />

              <button
                type="submit"
                disabled={!isFormValid}
                className="btn feedbackForm-button"
              >
                {text.send}
              </button>
            </div>
          </form>
        }
      </div>
    );
  }

  handleChangeContact = (e) => {
    const contact = e.target.value;

    this.setState({
      contact,
      isContactValid: validateEmailFormat(contact),
    });
  }

  handleChangeMessage = (e) => {
    const message = e.target.value;

    localStorage.setItem(LS_MESSAGE_PARAM, message);

    this.setState({
      message: e.target.value,
      isMessageValid: validateMessage(message),
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { contact, message, isContactValid, isMessageValid } = this.state;
    const isValid = isContactValid && isMessageValid;;

    if (isValid) {
      api.post('message', {
        contact: this.state.contact,
        message: this.state.message
      })
      .then((res) => {
        this.setState({success: true})
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}

FeedbackForm.contextTypes = {
  text: PropTypes.object,
};
