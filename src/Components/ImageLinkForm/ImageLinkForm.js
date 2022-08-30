import React from "react";

function form ({onInputChange})
{
    return (
        <>
        <div>
            <p className="f3 center">Face Reconigtion App</p>
        </div>
        <div className="center"> 
            <div className="pa4 br3 shadow-5 center">
                <input className="f4 pa2 w-70" onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>        
        </div>
        </>
    )
}

export default form;