import React from 'react'
import "./menuitem.styles.scss"
import { withRouter} from 'react-router-dom'



const MenuItem = ({ title, imageURL,size,history,linkUrl,match}) => {
    return (
        <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`)}} >
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitles">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
