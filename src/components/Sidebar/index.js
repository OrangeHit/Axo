import React from 'react';
import { SidebarContainter, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainter isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                    HOME
                    </SidebarLink>
                    <SidebarLink to="About">
                    ABOUT
                    </SidebarLink>
                    <SidebarLink to="Roadmap">
                    ROADMAP
                    </SidebarLink>
                    <SidebarLink to="Rarity">
                    RARITY
                    </SidebarLink>
                    <SidebarLink to="Team">
                    TEAM
                    </SidebarLink>
                    <SidebarLink to="FAQ">
                    FAQ
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/connectwallet">CONNECT WALLET</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainter>
    )
}

export default Sidebar
