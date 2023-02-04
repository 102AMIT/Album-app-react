import React, { useState } from 'react'
import style from '../styles/user.module.css';
import axios from 'axios';
const User = (props) => {

  const {data,removeAlbum} =props
  const { id, title } = data;
  const [editing, setEditing] = useState(false);
  const [updateTitle , setUpdateTitle] = useState(title);
  const [input , setInput] = useState(title)


  const deleteAlbum =async () =>{
    let albumId=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(albumId.data.id);
    removeAlbum(albumId.data.id);
  }

  const updateInput = async() =>{
    let updateData =  await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title:input})
    console.log(updateData.data.title);
    setUpdateTitle(updateData.data.title);
    setEditing(false);

  }
  return (

    <div className={style.container}>
    { 
      editing &&  <>
        <div className={style.singlePost}>
        <span>{id}</span>.
        <input className={style.userTitle} value={input} onChange={(e) =>setInput(e.target.value)}/>
      </div>
      <div className={style.btn}>
          <button className={style.btnEdit} onClick={updateInput}>Update</button>
      </div>
      </>
    }
    { 
      !editing &&  <>
      <div className={style.singlePost}>
        <span>{id}</span>.
        <span className={style.userTitle}>{updateTitle}</span>
      </div>
      <div className={style.btn}>
          <button className={style.btnEdit} onClick={()=>setEditing(true)}>Edit</button>
          <button onClick={deleteAlbum} className={style.btnDelete}>Delete</button>
      </div>
      </> 
    }
    
    </div>



  )
}

export default User