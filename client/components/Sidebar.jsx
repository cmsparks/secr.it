import React from 'react';

import SidebarChat from './SidebarChat.jsx';

class Sidebar extends React.Component {
  render() {
    return (
    	<div className="Sidebar">
    		<form className="topBar">
    			<input type="search" />
    		</form>
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    		<SidebarChat />
    	</div>
    	)
  }
}

export default Sidebar;