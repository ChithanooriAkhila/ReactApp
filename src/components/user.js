import React, { useState, useEffect} from 'react';

const User =(props)=>{
    const [planet, setPlanet]=useState("earth");
    //component didmount
    useEffect(()=>{
        //setPlanet("mars");
        console.log("component mounting");
        
        //componentwillunmount
        return console.log("bye bye");
    }, []);
    //componetdid update
    //shouldComponentUpdate
    useEffect(()=>{
        console.log("planet changes");

    },[planet]);

        return (
            <div>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
                <button onClick={()=>setPlanet("pluto")}>{planet}</button>
            </div>
        );
}
export default User;