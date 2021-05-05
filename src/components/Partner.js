import React, {useState, useEffect} from 'react';
import {dbService} from '../fbase.js'
import '../css/Partner.css';
import Fade from 'react-reveal/Fade'

function Partner() {
    let [partner, setPartner] = useState([])
    const getPartner = async () =>{
        const dbpartner = await dbService.collection("partner").get();
        dbpartner.forEach((document) => {
            const newpartner = {
                ...document.data(),
                id: document.id
            };
            setPartner((prev) => [newpartner, ...prev]);
        });
    };
    useEffect(()=>{
        getPartner();
    }, [])
    return(
        <div class='partnerBox'>
            {partner.map((partner)=>(
                <a href={partner.partnerLink}>
                    <Fade bottom>
                        <div>
                            <img src={partner.partnerURL} alt={partner.partnerLink}/>
                        </div>
                    </Fade>
                </a>
                
            ))}
        <div className='alumni'><p>+60</p></div>

        </div>
    )
}


export default Partner;