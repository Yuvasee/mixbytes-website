import React, {Component} from 'react';
// import AutoAffix from 'react-overlays/lib/AutoAffix';

import Header from 'components/Header';
import Footer from 'components/Footer2';

import './styles.css';

class PageLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default PageLayout;
