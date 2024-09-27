import { useState, useEffect } from 'react'

import axiosWithAuth from './../utils/axiosWithAuth'

function FriendsList() {

	const [friends, setFriends] = useState([])

	useEffect(() => {
		axiosWithAuth().get('http://localhost:5000/api/friends')
			.then(res => {
				console.log(res)
				setFriends(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return(
		<div>
			<h1>This is the Friends List</h1>
			{friends.map(friend => {
				return (
					<div>
						<h3>{friend.name}</h3>
						<p>{friend.age}</p>
						<p>{friend.email}</p>
					</div>
				)	
			})}
		</div>
	)
}

export default FriendsList;