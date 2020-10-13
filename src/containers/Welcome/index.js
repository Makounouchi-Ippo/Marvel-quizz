import React, { useState, useEffect } from 'react'
import Logout from '../Auth/Logout';
import Quiz from './Quiz';
import Loader from '../../components/Loader';

const Welcome = (props) => {

    const [userSession,setUserSession] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            localStorage.getItem('idToken') !== '' ? setUserSession(true) : props.history.push('/')
        }, 3000)
    }, [props.history])
    
    return (
        <div className='quiz-bg'>
            {
                userSession ? 
                <div className="container">
                    <Logout redirect={props}/>
                    <Quiz />
                </div>
                :
                <Loader loadingMsg="Chargement en cours ..."/>
            }
        </div>
    )  
}

export default Welcome