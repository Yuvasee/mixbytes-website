import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import './styles.css';

class TimestampCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleTimestamp(e) {
    e.preventDefault();

    const code = e.target.value;
    this.setState({code});

    let i = 0;
    let n = 0;
    let timestampsReport = '';
    while (i < code.length) {
      let j = code.indexOf("\n", i);
      if (j === -1) {
        j = code.length;
      }
      n++;

      let line = code.substr(i, j - i);
      const re = /.*(^|\D)(\d{10})($|\D).*/;
      // TODO: process > 1 timestamp in line

      if (re.test(line)) {
        const tstamp = line.replace(re, '$2');
        const dt = new Date(tstamp * 1000);
        timestampsReport += `Line ${n}: ${tstamp} = ${dt}\n`;
      }

      i = j + 1;
    }

    this.setState({timestampsReport});
  }

  render() {
    const text = this.context.text.common;
    const {code, timestampsReport} = this.state;

    return (
      <div className="timestamps">
        <h3>{text.checkTimestamps}</h3>
        <div>
          <textarea className="form-control" type="text" value={code} rows="4"
            onChange={this.handleTimestamp.bind(this)}
            placeholder={text.timestampsPlaceholder}
          />
          <textarea className="form-control" type="text" value={timestampsReport} disabled rows="4"/>
        </div>
      </div>
    );
  }
}

export default TimestampCheck;

TimestampCheck.contextTypes = {
  text: PropTypes.object,
};
