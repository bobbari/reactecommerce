import React, { useEffect, useState} from 'react'
import "./directory.styles.scss";
import {MenuItems} from './menuItems'
import MenuItemComponents from '../menu-items/MenuItem.components'

const DirectoryComponet = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        setMenu(MenuItems);
    },[])
    return (
        <div className="directory-menu">
            {
                (menu.length>0)?
                    menu.map(({id, ...otherSectionProps }) => (
                        <MenuItemComponents 
                        key={id} 
                        {...otherSectionProps} 
                        />
                    ))
                    :null
            }
        </div>
    )
}

export default DirectoryComponet
