import React from 'react';
import classNames from 'classnames';

import './styles.css';

const ContactUsButton = ({className, children, ...props }) => (
  <button className={classNames('big-button', className)} {...props}>
    {children}
  </button>
);

export default ContactUsButton;
