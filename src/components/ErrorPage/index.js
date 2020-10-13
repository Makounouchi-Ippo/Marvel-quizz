import React, { useEffect } from 'react';
import batman from '../../images/batman.png';
import Loader from '../Loader';

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px' 
}

const centerImg = {
    display: 'block',
    margin: '40px auto'
}

const ErrorPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.history.push('/')
        }, 3000)
    }, [props.history])

    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups, cette page n'existe pas!</h2>
                <img style={centerImg} src={batman} alt="error page" />
                <Loader loadingMsg="Chargement en cours vous allez etre rediriger vers la page d'acceuil..."/>
            </div>
        </div>
    )
}

export default ErrorPage;