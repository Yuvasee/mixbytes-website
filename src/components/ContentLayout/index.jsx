import React, {Component} from 'react';

import './styles.css';

class ContentLayout extends Component {
  render() {
    return (
      <div className="container-content">
        <div className="content-left">
        </div>
        <div className="content-mid">
          {this.props.children}
        </div>
        <div className="content-right">
        </div>
      </div>
    );
  }
}

export default ContentLayout;
