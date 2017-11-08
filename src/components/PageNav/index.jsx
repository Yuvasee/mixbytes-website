import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';

import './styles.css';

class PageNav extends Component {
  render() {
    const links = [];
    const listItems = this.props.links.map((item, i) => {
      links.push(item.link);
      return (
        <li key={i}>
          <a href={`#${item.link}`} dangerouslySetInnerHTML={{__html: item.name}}/>
        </li>
      );
    });

    return (
      <Scrollspy
        className="page-nav"
        items={links}
        currentClassName="active"
      >
        {listItems}
      </Scrollspy>
    );
  }}

export default PageNav;
