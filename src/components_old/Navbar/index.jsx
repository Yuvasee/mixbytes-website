import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';

import './styles.css';

class Navbar extends Component {
  render() {
    const links = [];
    const listItems = this.props.links.map((item, i) => {
      links.push(item.link);

      return (
        <li className="nav-item" key={i}>
          {item.link === "EXTERNAL" ?
            <a className="nav-link" href={item.address}>{item.name}</a> :
            <a className="nav-link" href={`#${item.link}`}>{item.name}</a>
          }
        </li>
      );
    });

    return (
      <nav className="container navbar navbar-expand-lg sticky-top navbar-dark">
        <a className="navbar-brand" href="/">
          MixBytes<br />
          <span>Blockchain Labs</span>
        </a>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Scrollspy
            className="navbar-nav mr-auto"
            items={links}
            currentClassName="active"
          >
            {listItems}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Navbar;
