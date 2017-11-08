import React, {Component} from 'react';
import AutoAffix from 'react-overlays/lib/AutoAffix';

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
          <AutoAffix container={this}>
            <div>
              {this.props.contentRight}
            </div>
          </AutoAffix>
        </div>
      </div>
    );
  }
}

export default ContentLayout;
