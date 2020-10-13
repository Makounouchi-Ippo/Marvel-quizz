import React from 'react';

const Loader = ({ loadingMsg, styling }) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <div className="loader"></div>
            <p style={styling}>
                { loadingMsg }
            </p>
        </div>
    )
}

export default Loader;