import React, {Component,  useEffect, useState} from 'react'
import "./directory.styles.scss";
import {MenuItems} from './menuItems'
import MenuItemComponents from '../menu-items/MenuItem.components'

class DirectoryComponet extends Component {
    constructor(props) {
        super(props)
        this.state = { menu:[] }
    }
    componentDidMount(){
        this.setState({ menu:MenuItems })
    }
    // const [menu,setMenu] = useState([]);
    // useEffect(()=>{setMenu(MenuItems); },[])
    render(){
        return (
            <div className="directory-menu">
                {
                    (this.state.menu.length>0)?
                        this.state.menu.map(({id, ...otherSectionProps }) => (
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
}

export default DirectoryComponet
