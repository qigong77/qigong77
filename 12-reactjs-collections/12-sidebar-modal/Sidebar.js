import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { social, links } from './data';

const Sidebar = () => {
    const { isSidebarOpen, closeSidear } = useGlobalContext();
    return (
        <div>

        </div>
    );
};

export default Sidebar;