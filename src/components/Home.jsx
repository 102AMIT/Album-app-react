import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import User from './User';
import style from '../styles/user.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [userId, setUserID] = useState("");
  const [adding, setAdding] = useState(false);


  // initial api call fetching data
  async function fetchApi() {
      let getdata = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setData(getdata.data);
  }
  // initial render
  useEffect(() => {
    fetchApi();
  }, [])


  // adding album 
  const addAlbum = async () => {
    
    setAdding(false);
    if(title === "" || userId === ""){
      return toast.error("Please Enter Data")
    }
    
    
    const postdata = await axios.post('https://jsonplaceholder.typicode.com/posts',{userId:userId,title:title})
    
    const addedData = [...data, postdata.data];
    setData(addedData); 
    toast.success("Album added successfully");
  }
  
 

  // remove the album

  const removeAlbum = (id) => {
    const newList = data.filter(album => id !== album.id)
    setData(newList);
    toast.success("Album removed successfully");
  }
    

  return (
    <div >
      <div className={style.addItem}>
        {
          adding &&
          < >
            <div className={style.formGroup}>
              <span className={style.usertitle}>UserID</span>
              <input className={style.formfield} type="text" onChange={(e) => setUserID(e.target.value)} />
            </div>

            <div className={style.formGroup}>
              <span className={style.usertitle}>Title</span>
              <input className={style.formfield} type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* <input type="submit" onClick={() => setAdding(false)} /> */}
            <input type="submit" onClick={addAlbum} />
          </>
        }
        {
          !adding && <button onClick={() => setAdding(true)} className={style.buttonAdd} type="submit">Click Here To Add A New Album</button>

        }
      </div>
      <div className={style.alluser}>
        {
          data.map((item) => {
            return <User data={item} key={item.id} removeAlbum={removeAlbum}/>
          })
        }
      </div>


    </div>
  )
}

export default Home