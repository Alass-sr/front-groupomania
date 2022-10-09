import React from 'react';
import Log from '../components/Log';

const Profil = () => {
    return (
        <div className='profil-page'>
            <div className='img-container'>
                <img src='./img/icon-left-font.svg' alt=''/>
            </div>
            <div className='log-container'>
                <Log signin={false} signup={true}/>
            </div>
        </div>
    );
};

export default Profil;