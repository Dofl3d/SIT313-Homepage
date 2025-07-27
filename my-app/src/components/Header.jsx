import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Header = () => (
  <Menu inverted>
    <Menu.Item header>DEV@Deakin</Menu.Item>
    <Menu.Item style={{ flex: 1 }}>
      <Input 
        icon='search' 
        placeholder='Search...' 
        fluid
      />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>Login</Menu.Item>
      <Menu.Item>Post</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;