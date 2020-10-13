import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
    
    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);

    useEffect(()=>{ 
        refWolverine.current.classList.add('startingImg')
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
        }, 1000);
    }, [])

    const showLeftGriffe = () => {
        refWolverine.current.classList.add('leftImg');
    }
    const showRightGriffe = () => {
        refWolverine.current.classList.add('rightImg');
    }


    const clearLeftGriffe = ()=>{
        refWolverine.current.classList.remove('leftImg')
    }

    const clearRightGriffe = ()=>{
        refWolverine.current.classList.remove('rightImg')
    }

    const displayBtn = btn && (
        <>
            <div className="leftBox" onMouseOver={showLeftGriffe} onMouseOut={clearLeftGriffe}>
                <Link className="btn-welcome" to='signup'>Inscription</Link>
            </div>
            <div className="rightBox" onMouseOver={showRightGriffe} onMouseOut={clearRightGriffe}>
                <Link className="btn-welcome" to='login'>Connexion</Link>
            </div>
        </>
    )
    
    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Landing;