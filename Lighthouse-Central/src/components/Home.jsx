import React, { useState, useEffect } from 'react';
import GetPoolCard from './PoolCard'

export default function Home() {
    return (
        <div>
        <h1> Hello Everyone! </h1>
            <GetPoolCard name="NCC" manager="Scarlett" numGuards="5"/>
            <GetPoolCard name="BCC" manager="Bruce" numGuards="6"/>
        </div>
    )
}