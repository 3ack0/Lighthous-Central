import React, { useState, useEffect } from 'react';
import PoolCard from './PoolCard'
import { getCollectionDocs } from '../firebaseHelper';

export default function Home() {
    const [poolData, setPoolData] = useState([]);
    
    useEffect(() => {
        getCollectionDocs(setPoolData);
        console.log(poolData)
    }, []);

    return (
        <div className='home'>
            <div>
                <h1> Hello Everyone! </h1>
            </div>
            <div>
                {poolData.map((pool, idx) => (
                        <PoolCard
                            name={pool.Name}
                            manager={pool.Manager}
                            numGuards={pool.NumGuards}
                            key={idx}
                        /> 
                    )            
                )}
                <PoolCard name="NCC" manager="Scarlett" numGuards="5"/>
                <PoolCard name="BCC" manager="Bruce" numGuards="6"/>
            </div>
        </div>
    )
}