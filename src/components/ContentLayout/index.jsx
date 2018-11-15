import React, {Component} from 'react';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import classNames from 'classnames';

import './styles.css';

class ContentLayout extends Component {
  render() {
    const { contentRight, className} = this.props;
    
    return (
      <div className={classNames('container-content', className)}>
        <div className="content-left">
        </div>
        <div className="content-mid">
          {this.props.children}
        </div>
        <div className="content-right">
          {contentRight && 
            <AutoAffix container={this}>
              <div>
                {contentRight}
              </div>
            </AutoAffix>
          }
        </div>
      </div>
    );
  }
}

export default ContentLayout;
