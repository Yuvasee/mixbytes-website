import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.css';

class ContainerBlock extends Component {
  render() {
    return (
      <div className={classNames('container-fluid', this.props.type === 'dark' ? 'bg-code' : 'bg-code-light')}>
        <div className="container">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerBlock;
