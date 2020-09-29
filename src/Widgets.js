import React from 'react'

function Widgets() {
    return (
        <div className = "widgets" >

            <iframe 
            width="340"
            height="560"
            src="https://www.youtube.com/embed/EcpZgCaUr5M" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
            {/* <iframe
            width="340"
            height="100%"
            src="https://www.youtube.com/embed/EcpZgCaUr5M"
            
            style={{border = "none", overflow = "hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >

            </iframe> */}
        </div>
    )
}

export default Widgets
