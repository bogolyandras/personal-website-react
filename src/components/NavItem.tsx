import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return isActive ? (
        <li>
            <span className="active">{children}</span>
        </li>
    ) : (
        <li>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
};

export default NavItem;