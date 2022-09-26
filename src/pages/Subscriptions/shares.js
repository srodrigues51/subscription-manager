import React from 'react';
import axios from "axios";

function Shares (){
    const addPost = data => axios.post('https://api.getpostman.com/collections',data)
    .then(() => {
        console.log("deletado")
    })
    .catch(() => {
        console.log("erro, favor tentar novamente")
    })
    return{ 
        
    }
}

export default Shares();