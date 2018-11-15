import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as emailjs from 'emailjs-com';

import Modal from 'components/common/Modal';
import BigButton from 'components/common/BigButton';
import { validateEmailFormat } from 'helpers/validators';

class ContactUsButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      name: '',
      email: '',
      message: '',
      errors: {},
      status: 'init'
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

    emailjs.init('user_F7sanYW5usGl87AAEUF6M');
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm() {
    const { name, email, message } = this.state;
    const errors = {
      email: !validateEmailFormat(email),
      name: !name.length,
      message: !message.length
    };
    this.setState({errors})

    if (validateEmailFormat(email) && name.length && message.length) {
      this.setState({status: 'sending'});

      emailjs.send('gmail', 'mixbytes_io_connect_form', {name, email, message})
        .then((res) => {
          if (res.status === 200) {
            this.setState({status: 'success'});
          }
        }, (err) => {
          this.setState({status: 'error'});
          console.log(err);
        });
    }
  }

  render() {
    const { 
      contactUs, send, name, email, message, sending, success, error
    } = this.context.text.contactUs;
    const { errors, status } = this.state;

    return (
      <div>
        <BigButton onClick={this.toggleModal}>{contactUs}</BigButton>
        {this.state.isModalOpen &&
          <Modal header={contactUs} close={this.toggleModal}>
            <form className="contact-us-modal">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder={name}
                  onChange={this.handleChange}
                  className={classNames({error: errors.name})}
                />
              </div>
              <div>
                <input
                  name="email"
                  type="text"
                  placeholder={email}
                  onChange={this.handleChange}
                  className={classNames({error: errors.email})}
                  />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={message}
                  rows="4"
                  onChange={this.handleChange}
                  className={classNames({error: errors.message})}
                />
              </div>
            </form>
            <div className="submit-button">
              {status === 'init'
                ? <BigButton onClick={this.submitForm}>{send}</BigButton>
                : <BigButton disabled={true}>
                    {status === 'sending' && `${sending}`}
                    {status === 'success' && `${success}`}
                    {status === 'error' && `${error}`}
                  </BigButton>
              }
              
            </div>
          </Modal>
        }
      </div>
    );
  }
}

export default ContactUsButton;

ContactUsButton.contextTypes = {
  text: PropTypes.object,
};
