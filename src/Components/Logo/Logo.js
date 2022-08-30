import React from "react";
import Tilt from 'react-tilt';

function Logo () {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner tc pa3"> 
                    <img style={{width: '150%'}} alt={'face logo'} src={"https://upload.wikimedia.org/wikipedia/commons/c/c0/Face_ID_logo.svg"}>
                    </img> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;