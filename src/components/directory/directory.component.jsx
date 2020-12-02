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
                    menu.map(({id,name,imageURL,size}) => (
                        <MenuItemComponents 
                        key={id} 
                        title={name} 
                        image={imageURL}
                        size={size}
                        />
                    ))
                    :null
            }
        </div>
    )
}

export default DirectoryComponet
