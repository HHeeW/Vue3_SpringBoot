import axios from 'axios';

export const getPost = (url, fnc)=>{
    axios.get(url)
    .then(response => {
        fnc(response)
    })
    .catch(error => {
        console.error("There was an error!", error);
    });
}

