import axios from 'axios';
import { useEffect ,useState } from 'react';
import User from './User';
const Home = () => {

  const [adding,setAdding] =useState(false);
  const [data , setData] =useState([]);
  async function fetchApi(){
    
    let getdata =await axios.get('https://jsonplaceholder.typicode.com/albums');
    console.log(getdata)
    setData(getdata.data);
  }

  useEffect(()=>{
    fetchApi();
  },[])
  
  return (
    <div>
        {
          adding &&
            <div>
                <input type="text" />
                <input type="text" />
                <input type="submit" value="Sumbit" onClick={()=>setAdding(false)}/>
            </div>  
        }
        {
          !adding && <button onClick={()=>setAdding(true)}>AddItem</button>
        }
        
        {
          data.map((item)=>{
            return <User data={item} key={item.id}/> 
          })
        }
    </div>
  )
}

export default Home