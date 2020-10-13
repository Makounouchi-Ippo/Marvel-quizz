import React, { useState, useEffect } from 'react'
import ReactToolTip from 'react-tooltip'

const Logout = (props) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            localStorage.clear()
            props.redirect.history.push('/')
        }
    }, [checked, props.redirect.history]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input 
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round" data-tip="Déconnexion"></span> 
            </label>
            <ReactToolTip 
                place="left"
                effect="solid"
            />
        </div>
    )
}

export default Logout