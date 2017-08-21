import React, {Component} from 'react';

import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
        <div className="container" id="feedback">
          {this.props.feedback &&
            <div>
              <h1 className="display-4">Напишите нам</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="contact">Как с вами связаться?</label>
                  <input type="text" className="form-control" id="contact" placeholder="Номер телефона или адрес e-mail" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Ваше сообщение</label>
                  <textarea className="form-control" id="messages" rows="5"></textarea>
                </div>
                <button type="submit" className="btn">Отправить</button>
              </form>
            </div>
          }
          <div className="copy">&copy;&nbsp;2017&nbsp;&mdash; MixBytes Blockchain Labs</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
