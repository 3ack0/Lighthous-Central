import React, { useState } from 'react';
import { createNewDoc } from '../firebaseHelper';

const PROFILE_NAME = "John Doe"

export default function AddPool({
	callback,
	person
}) {
	const [poolName, setpoolName] = useState('');
	const [manager, setManager] = useState('');
	const [numGuards, setNumGuards] = useState('');

	function postPool() {
		createNewDoc({
			'person': person,
			'Name': poolName, 
			'Manager': manager, 
			'NumGuards': numGuards, 
		});
		setpoolName('');
		setManager('');
		setNumGuards('');

		
		callback();
	}

	return (
		<div className='run-post'>
			<h2>Create a Post</h2>
			<div className='create-post'>
				<div className='create-post-headings'>
					<h3>poolName</h3>
					<h3>Manager</h3>
					<h3>NumGuards</h3>

				</div>
				<div className='create-post-inputs'>
					<input
						type='text'
						value={poolName}
						onChange={(e) => setpoolName(e.target.value)}
					/>
					<input
						type='text'
						value={manager}
						onChange={(e) => setManager(e.target.value)}
					/>
					<input
						type='text'
						value={numGuards}
						onChange={(e) => setNumGuards(e.target.value)}
					/>
				</div>
			</div>
			<div className='post-button'>
				<button onClick={postPool}>Post</button>
			</div>
		</div>
	);
}