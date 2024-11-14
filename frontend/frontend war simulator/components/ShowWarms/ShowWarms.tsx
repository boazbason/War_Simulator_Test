import React from 'react'
import { IUser } from '../../src/types/types'
import { StartSocket } from '../../src/socketManeger'

interface Props {
    user: IUser
}

const ShowWarms: React.FC<Props> = ({user}) => {
  return (
    <div>
        <h1>Show w</h1>
        <div>
            {user.resources?.map((resource) => (
                <div>
                    <h4>{resource.missile?.name}</h4>
                    <p>{resource.amount}</p>
                    <button onClick={() => {StartSocket().StartAttack(resource.missile!._id!, user.username)}}>socket</button>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default ShowWarms
