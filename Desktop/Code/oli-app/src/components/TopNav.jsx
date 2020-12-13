import React from 'react';
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content } from 'react-mdl';

var TopNav = (props) => (



<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Title" />
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
            </HeaderTabs>
        </Header>
        <Drawer title="Title" />
        <Content>
            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
        </Content>
    </Layout>
</div>


)

export default TopNav;