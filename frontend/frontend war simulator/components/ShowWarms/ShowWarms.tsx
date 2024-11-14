import React, { useState } from 'react'
import { IUser } from '../../src/types/types'
import { StartSocket} from '../../src/socketManeger'
import { loginUser } from '../../src/store/userSlice'
import { useDispatch } from 'react-redux'
import './ShowWarms.css'

interface Props {
    user: IUser
}

const ShowWarms: React.FC<Props> = ({user}) => {
    const dispatch = useDispatch()
    const [currentLocation, setcurrentLocation] = useState<string>("North")
    
   
    return (
        <div className="navbar">
            <h1 className="navbar-title">Your Warms</h1>
            <div className="navbar-resources">
                {user.resources?.map((resource) => (
                    <div className="resource-item" key={resource.missile?._id?.toString()}>
                        <h4 className="resource-name">{resource.missile?.name}</h4>
                        <p className="resource-amount">{resource.amount}</p>
                        {!user.organization.includes("IDF") &&
                        <button 
                            className="resource-button" 
                            onClick={async () => {
                                await StartSocket().StartAttack(resource.missile!._id!, user.username, currentLocation); 
                                //@ts-ignore
                                setTimeout(async () => dispatch(await loginUser(user)), 500); 
                            }}
                        >
                            Fire
                        </button>}
                        {/* בדיקה האם הוא בהגנה והצגת הטילים מהאזור שלו */}
                        {user.organization.includes("IDF") && <p>Protected Area</p>
                            
                        }
                        
                    </div>
                ))}
                {!user.organization.includes("IDF") &&
                <select name="location" id="" onChange={(e)=>{setcurrentLocation( e.target.value); }}>
                    
                    <option value="North">North</option>
                    <option value="South">south</option>
                    <option value="Center">Center</option>
                    <option value="West Bank">West Bank</option>
                </select>}
            </div>
        </div>
    )
}

export default ShowWarms