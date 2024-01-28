import React, { useState, useEffect } from 'react';
import AddPool from './AddPool';
import { getMyDocs } from '../firebaseHelper';

const PROFILE_NAME = "John Doe"

export default function Dashboard() {
    const [dashboardPools, setDashboardPools] = useState([]);

	useEffect(() => {
		getMyDocs(PROFILE_NAME, setDashboardPools);
	}, []);

    return (
        <div>
             <h1> Lighthouse Central Dashboard </h1>
             <p> This is the page to edit the information on the dashboard</p>
             <p>Functionality will soon be added to connect to firebase API</p>
             <AddPool callback={() => getMyDocs(PROFILE_NAME, setDashboardPools)} person={PROFILE_NAME} />
        </div>
    )
}