import React, { type ReactNode } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import * as styles from './LinkButton.module.css';

type LinkButtonPropTypes = {
  to: string;
  children: ReactNode;
  black?: boolean;
  white?: boolean;
  className?: string;
};

const LinkButton: React.FC<LinkButtonPropTypes> = ({ to, children, black, white, className }) => (
  <Link
    to={to}
    className={cx(styles.base, { [styles.black]: black, [styles.white]: white }, className)}
  >
    {children}
  </Link>
);

LinkButton.defaultProps = {
  black: false,
  white: false,
  className: '',
};

export default LinkButton;
