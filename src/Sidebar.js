import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import { Chat, LocalHospital } from '@material-ui/icons';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Feed from './Feed';
import { useStateValue } from './StateProvider';

function Sidebar() {
    
    const [{user}, dispatch] = useStateValue();
    return (
        <div className = "sidebar" >
            <SidebarRow src = {user.photoURL} 
            title = {user.displayName}/>
            <SidebarRow 
                Icon = {LocalHospital}
                title = "COVID-19 Information Center"
                />
            
            <SidebarRow Icon={EmojiFlagsIcon} title = "Pages"/>
            <SidebarRow Icon={PeopleIcon} title = "Friends"/>
            <SidebarRow Icon={ChatIcon} title = "Messanger"/>
            <SidebarRow Icon={StorefrontIcon} title = "Marketpalce"/>
            <SidebarRow Icon={VideoLibraryIcon} title = "Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title = "Marketplace"/>

        </div>
    )
}

export default Sidebar
