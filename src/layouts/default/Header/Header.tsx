import { useState, FunctionComponent } from 'react';

import classNames from 'classnames';
import styles from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return <header className={classNames(styles.header, { [styles.open]: isOpen })}>header</header>;
};

export default Header;
