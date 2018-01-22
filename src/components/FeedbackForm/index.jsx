import React from 'react';
import PropTypes from 'prop-types';

import api from '../../helpers/api';
import { validateEmailFormat } from '../../helpers/validators'

import './styles.css';

export class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contact: '',
      message: '',
      errContact: false,
      errMessage: false,
      success: false
    };
  }

  render () {
    const text = this.context.text.feedback;
    const { errContact, errMessage, message, success } = this.state;

    return (
      <div className="feedbackForm-container">
        <h2 className="feedbackForm-title">
          { success ? text.messageSent : text.writeToUs }
        </h2>

        {
          !success &&
          <form
            className="feedbackForm-form"
            onSubmit={this.handleSubmit}
          >

            <div className="feedbackForm-input">
              <input
                type="text"
                id="contact"
                placeholder={text.emailPlaceholder}
                onChange={this.handleChangeContact}
                className={`form-control ${errContact ? 'is-invalid' : ''})`}
              />

              {
                errContact &&
                <div className="invalid-feedback">{text.invalidEmail}</div>
              }
            </div>

            <div className="feedbackForm-input">
              <textarea
                id="messages"
                rows="5"
                placeholder={text.messagePlaceholder}
                onChange={this.handleChangeMessage}
                className={`form-control ${errMessage ? 'is-invalid' : ''})`}
              ></textarea>

              {
                errMessage &&
                <div className="invalid-feedback">{`${text.tooShortMessage} ${message.length}`}</div>
              }
            </div>

            <button type="submit" className="btn feedbackForm-button">{text.send}</button>
          </form>
        }
      </div>
    );
  }

  handleChangeContact = (e) =>
    this.setState({contact: e.target.value});

  handleChangeMessage = (e) =>
    this.setState({message: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();

    const { contact, message } = this.state;
    let isValid = true;

    if (validateEmailFormat(contact)) {
      this.setState({errContact: false});
    } else {
      isValid = false;
      this.setState({errContact: true});
    }

    if (message.length < 80) {
      isValid = false;
      this.setState({errMessage: true});
    } else {
      this.setState({errMessage: false});
    }

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
