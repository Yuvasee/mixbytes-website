import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';
import classNames from 'classnames';

import api from 'helpers/api';

class EmailForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      error: false,
      success: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const {email} = this.state;
    let isValid = true;

    if (!isEmail(email)) {
      isValid = false;
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }

    if (isValid) {
      api.post('email', {
        type: 'school',
        address: email
      })
      .then((res) => {
        this.setState({success: true})
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  handleChange(e) {
    this.setState({email: e.target.value});
  }

  render() {
    const {buttonText, successMessage} = this.props;
    const {success} = this.state;

    if (success) {
      return (
        <p>{successMessage}</p>
      );
    } else {
      return (
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input type="text" className={classNames('form-control mb-2 mr-sm-2 mb-sm-0', {'is-invalid': this.state.error})} placeholder="Ваш e-mail"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success">{buttonText}</button>
        </form>
      );
    }
  }
}

export default EmailForm;
