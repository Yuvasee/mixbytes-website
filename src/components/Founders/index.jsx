import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContentBlock from 'components/ContentBlock';

import './styles.css';

class Founders extends Component {
  render() {
    const { founders } = this.context.text.main;
    const { team } = this.context.text;

    return (
      <ContentBlock id="founders">
        <h2>{founders}</h2>

        <div className="team-container">
          {team.map((e, i) => (
            <div className="team-item" key={'team-item'+i}>
              <div className="team-item-photo">
                <img src={require(`assets/team-photos/${e.photo}`)} alt={`${e.name} pic`}/>
              </div>
              <div className="team-item-name">{e.name}</div>
              <div className="team-item-position">{e.position}</div>
              <div className="team-item-linkedin"><a href={e.linkedin}>LinkedIn</a></div>
            </div>
            ))}
        </div>
      </ContentBlock>
    );
  }
}

export default Founders;

Founders.contextTypes = {
  text: PropTypes.object,
};
