import React, {useEffect, useState} from 'react';
import {dbService} from '../../fbase.js'
import Home from '../../route/home.js';

function Data(){
    const [info, setInfo] = useState();
    const getInfo = async () =>{
        const dbinfo = await dbService.collection("UKOV").get();
        dbinfo.forEach((document) => {
            const newInfo = {
                ...document.data(),
                id: document.id
            };
            setInfo(newInfo)
        });
        };        
    useEffect(()=>{
        getInfo();
    }, [])
    console.log(info)
}

export default Data;