import { forwardRef } from 'react';
import type { NavProps, NavItemProps } from '../types';

export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ children, orientation = 'horizontal', className = '', style, ...rest }, ref) => {
    const classes = [
      'nav',
      orientation === 'vertical' ? 'nav-vertical' : 'nav-horizontal',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <nav ref={ref} className={classes} style={style} {...rest}>
        {children}
      </nav>
    );
  }
);
Nav.displayName = 'Nav';

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ children, active = false, href = '#', className = '', style, ...rest }, ref) => {
    const classes = ['nav-item', active ? 'active' : '', className].filter(Boolean).join(' ');

    return (
      <a ref={ref} href={href} className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }
);
NavItem.displayName = 'NavItem';
