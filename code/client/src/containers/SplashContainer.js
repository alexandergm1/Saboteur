import React, { useState } from 'react';
import SplashMenu from '../components/SplashMenu';
import SingleLogin from '../components/SingleLogin';

const SplashContainer = ({handleEnterClick})=>  {

    const[selector, setSelector] = useState("menu");

    const handleClick = (value) => {
        setSelector(value);
    }

    if(selector === "menu"){

        return <SplashMenu handleClick={handleClick}/>

    } else if (selector === "single"){
        return <SingleLogin handleEnterClick={handleEnterClick}/>
    }
    
}


export default SplashContainer;