import React from 'react'
// import Header from "./components/header/header"
import "./homepage.style.scss"

const HomepageComponent = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title" >Hats</h1>
                        <span className="subtitles">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content" >
                        <h1 className="title" >SNEAKERS</h1>
                        <span className="subtitles">Show Now</span>
                    </div >
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title" >Jackets</h1>
                        <span className="subtitles">Show Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title" >Womans</h1>
                        <span className="subtitles">Show Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title" >Mens</h1>
                        <span className="subtitle">Show Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageComponent
