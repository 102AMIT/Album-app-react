import React from 'react'
import style from '../styles/user.module.css';
const User = (props) => {
  
  const {data,removeAlbum} =props
  
  const { id, title } = data;
  return (

    <div className={style.container}>
      <div className={style.singlePost}>
        <span>{id}</span>.
        <span className={style.userTitle}>{title}</span>
      </div>
      <div className={style.btn}>
        <button className={style.btnEdit}>Edit</button>
        <button onClick={e => removeAlbum(id)} className={style.btnDelete}>Delete</button>
      </div>
    </div>



  )
}

export default User