import React from "react";
import {Icon, Menu} from "antd";
import {BrowserRouterProps, NavLink, withRouter} from 'react-router-dom';

interface IMenuBarComponent {
    location: Location
}

const MenuBar = ({location}: IMenuBarComponent) => {
    const activePath = location.pathname.replace(/\//g, "");
    console.log(location.pathname);
    return <Menu mode="horizontal" selectedKeys={[activePath]}>
        <Menu.Item key="calc">
            <NavLink to="/calc">

                <Icon type="calculator"/>
                Calculator
            </NavLink>
        </Menu.Item>

        <Menu.Item key="units">
            <NavLink to="/units">
                <Icon type="unordered-list" />
                Units
            </NavLink>
        </Menu.Item>

        <Menu.Item key="settings">
            <NavLink to="/settings">
                <Icon type="setting"/>
                Settings
            </NavLink>
        </Menu.Item>
    </Menu>;
};

// TODO: remove as any
export default withRouter(MenuBar as any)