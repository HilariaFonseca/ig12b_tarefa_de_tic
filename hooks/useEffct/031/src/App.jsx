import React, {useState,useEffect} from 'react'
import User from './components/User'
import './App.css'

export default function App(){

    // state
    const [users, setUsers] = useState([])

    // effect
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => {
            setUsers(json.users)
        })
    }, [])

    return (
        <>
            <h3>Usuários inscritos</h3>
            <hr />
            {users.map(user => {
                return <User key={user.id} usuario={user} />
            })}
        </>
    )
}