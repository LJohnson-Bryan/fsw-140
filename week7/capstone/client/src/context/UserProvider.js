import React, { useState } from 'react';
import axios from 'axios';
export const UserContext = React.createContext();

export default function UserProvider(props) {

const initState = { 
    user: JSON.parse(localStorage.getItem('user')) || {}
}
const [userState, setuserState] = useState(initState);

const signup = (credentials, history) => {
    axios.post('/account', credentials)
        .then (res => {
            axios.get(`/account/${credentials.username}`)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data[0]));
                setuserState(res.data[0]);
                history.push('/home');
            })
        .catch(err => {
            console.log(err)
        })
    })
    .catch (err => console.log(err.response.data.errMsg))
}

const login = (user, credentials, history, setError) => {
    axios.get(`/account/${user}`)
    .then (res => {
        if(res.data[0].password === credentials.password) {
            localStorage.setItem('user', JSON.stringify(res.data[0]));
            setuserState(res.data[0]);
            console.log(res.data[0]);
            history.push('/home');
        } else {
            setError('Invalid Credentials')
        }
    })
    .catch (err => {
        console.log(err)
    });
}

const logout = () => {
    localStorage.removeItem('user');
    setuserState({user: {}})
}


const getUser = (username, setItem) => {
    axios.get(`/account/${username}`)
    .then(res => {
        setItem(res.data[0])
    })
    .catch(err => console.log(err))
}

const deleteUser = (id, history) => {
    axios.delete(`/account/${id}`)
    .then(res => {
        history.push('/');
    })
    .catch(err => console.log(err))
}

const updateUser = (userID, obj, history, username) => {
    axios.put(`/account/${userID}`, obj)
    .then(res => {
        axios.get(`/account/${username}`)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data[0]));
            setuserState(res.data[0]);
            history.push('/profile');
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err);
    })
}

    return (
        <UserContext.Provider value={ 
            { 
                ...userState, 
                signup, 
                login, 
                logout,
                updateUser,
                getUser,
                deleteUser,
                } }>
            { props.children }
        </UserContext.Provider>
    )
    }
