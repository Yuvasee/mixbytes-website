import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';
import classNames from 'classnames';

import api from 'helpers/api';

import './styles.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: '',
      message: '',
      errContact: false,
      errMessage: false,
      success: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {contact, message} = this.state;
    let isValid = true;

    if (!isEmail(contact)) {
      isValid = false;
      this.setState({errContact: true});
    } else {
      this.setState({errContact: false});
    }

    if (message.length < 80) {
      console.log('1');
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

  handleChangeContact(e) {
    this.setState({contact: e.target.value});
  }

  handleChangeMessage(e) {
    this.setState({message: e.target.value});
  }

  render() {
    const {errContact, errMessage, message, success} = this.state;

    return (
      <footer className="container-fluid">
        <div className="container" id="feedback">
          {this.props.feedback &&
            <div>
              <h1 className="display-4">{success ? (<span>Спасибо,<br />ваше сообщение отправлено.</span>) : 'Напишите нам'}</h1>
              {!success &&
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" id="contact" placeholder="Ваш адрес e-mail" onChange={this.handleChangeContact}
                      className={classNames('form-control', {'is-invalid': errContact})}
                    />
                    {errContact &&
                      <div className="invalid-feedback">Это не похоже на e-mail</div>
                    }
                  </div>
                  <div className="form-group">
                    <textarea id="messages" rows="5" placeholder="Ваше сообщение" onChange={this.handleChangeMessage}
                      className={classNames('form-control', {'is-invalid': errMessage})}
                    ></textarea>
                    {errMessage &&
                      <div className="invalid-feedback">Напишите хотя бы 80 знаков. Сейчас {message.length}</div>
                    }
                  </div>
                  <button type="submit" className="btn">Отправить</button>
                </form>
              }
            </div>
          }
          <div className="contacts">
            Публичный канал в Telegram: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />
            Электропочта: <a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a><br />
            Если что-то срочное: <a href="https://t.me/LoungerX">https://t.me/LoungerX</a>
          </div>
          <div className="copy">&copy;&nbsp;2017&nbsp;&mdash; MixBytes Blockchain Labs</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
