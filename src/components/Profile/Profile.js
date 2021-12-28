import { React } from 'react'

import { useAuth0 } from '@auth0/auth0-react'

function Profile() {

    const { user, isAuthenticated } = useAuth0()

    return(
        isAuthenticated && (
            <div>
                <div>
                    <img src={user.picture} alt="" />
                    <h2> {user.name} </h2>
                    <p> {user.email} </p>
                </div>
                <div>
                    {JSON.stringify(user)}
                </div>
            </div>
        )
    )

}

export default Profile