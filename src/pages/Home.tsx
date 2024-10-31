import React from 'react';
import cityOfCats from '../images/Firefly a city of cats 99761.jpg';

const Home: React.FC = () => {
    return <>
        <div>
            <h1>Welcome to my world!</h1>
            <p>Here you will find some interesting stuff! Although there are not too many things, you can take a look
                around.</p>
            <img src={cityOfCats} alt="A city of cats" width="1000"/>
            <p>Follow me on</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/bogolyandras/">LinkedIn</a></li>
                <li><a href="https://github.com/bogolyandras">GitHub</a></li>
                <li><a href="https://www.credly.com/users/andras-bogoly/">Credly</a></li>
            </ul>
        </div>
    </>;
};

export default Home;
