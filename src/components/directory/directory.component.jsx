// system dependency
import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// custom import
import { selectDirectorySection} from '../../redux/directory/directory.selector'
import "./directory.styles.scss";
import MenuItemComponents from '../menu-items/MenuItem.components'


const DirectoryComponet = ({ menu}) => {
        return (
            <div className="directory-menu">
                {
                    (menu.length > 0) ?
                        menu.map(({ id, ...otherSectionProps }) => (
                            <MenuItemComponents
                                key={id}
                                {...otherSectionProps}
                            />
                        ))
                        : null
                }
            </div>
        )
    }
const mapStateToProps = createStructuredSelector({menu: selectDirectorySection})
export default connect(mapStateToProps)(DirectoryComponet)
