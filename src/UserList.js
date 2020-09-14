import React from 'react';

function User({user}){
    return(
        <div>
            <b>{user.userName}</b> <span>{user.email}</span>
        </div>
    )
}
function UserList(){
    const users = [
        {
            id :'1',
            userName:'meree',
            email:'meree@mail.com'
        },
        {
            id :'2',
            userName:'miree',
            email:'miree@mail.com'
        },
        {
            id :'3',
            userName:'meru',
            email:'meru@mail.com'
        },
    ];
    return(
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/> 
            <User user={users[2]}/>
        </div>
    )
}

export default UserList;