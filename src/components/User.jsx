import React from 'react'
import style from '../styles/user.module.css';
const User = (data) => {
    console.log(data,"dataaaa");
    const {id , title ,userId } =data.data;
  return (
        <div>
        <div className={style.container}>
            <div className="singlePost">
            <div>
            <span>UserId</span><span>{userId}</span>
            </div>
            <div>
            <span>Id</span><span>{id}</span>
            </div>
            <div>
            <span>Title</span><span>{title}</span>
            </div>
            </div>
        </div>
        </div>
  )
}

export default User