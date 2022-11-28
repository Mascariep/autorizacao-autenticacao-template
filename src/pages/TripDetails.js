import axios from 'axios';
import React, { useEffect} from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';

const TripDetails = () => {

useProtectedPage()

useEffect (()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/edipo/trip/0Yg7Vx9dPKJr6x8SL0lR', {
        headers:{
            auth: localStorage.getItem("token")
        }
    }).then((response)=> {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}, []);
return (
    <div>TripDetails</div>
)
}


export default TripDetails;