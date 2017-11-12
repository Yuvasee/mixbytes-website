import React, {Component} from 'react';

import './styles.css';

class BlockInfoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  handleTabs(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const {tabs} = this.props;

    return (
      <div className="block-info-tabs white-block">
        <div className="tabs">
          {tabs.map((element, i) => (
            <button className="btn btn-success tabs-button" onClick={() => this.handleTabs(i)}>{element.name}</button>
          ))}
        </div>
        <div className="content">
          {tabs[this.state.activeTab].content}
        </div>
      </div>
    );
  }
}

export default BlockInfoTabs;
