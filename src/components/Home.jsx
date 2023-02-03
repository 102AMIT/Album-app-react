import axios from 'axios';
import { useEffect, useState } from 'react';
import User from './User';
import style from '../styles/user.module.css';

const Home = () => {
  const [adding, setAdding] = useState(false);
  const [data, setData] = useState([]);
  async function fetchApi() {

    let getdata = await axios.get('https://jsonplaceholder.typicode.com/albums');
    console.log(getdata)
    setData(getdata.data);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  const setUserID = (e) => {
    console.log(e);
  }
  const setTitle = e => {
    console.log(e);
  }

  const removeAlbum = (id) => {

    const newList = data.filter(album => id !== album.id)
    setData(newList);
  }

  const addAlbum = (id) => {
    
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

            <input type="submit" onClick={() => setAdding(false)} />
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