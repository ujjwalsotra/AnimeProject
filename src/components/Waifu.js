import React,{useState} from 'react'
import "../styles/waifu.css";
import axios from 'axios';

const Waifu = () => {
  let myarr=[];
  const [urls, setUrls] = useState(myarr);
  //const [infield, setInfield] = useState("");
 // const newInfield = infield.charAt(0).toUpperCase();
 // const namestring=newInfield+infield.slice(1);
  const handleClick = () => {
    
    const fetchanimedata = async () => {
      try {
        const mydata = await axios.get(`https://waifu.it/api/waifu`, {
          headers: {
            Authorization:
              process.env.REACT_APP_ANIME_API_KEY,
          },
        });
        console.log(mydata.data.images);
        setUrls(...mydata.data.images);
       // console.log(mynewData)
       myarr=urls;

      } catch (e) {
        alert("Try some other theme pls");
      }
    };
    fetchanimedata();
  };
  return (
    <div className="waifumain">
    <div>
      {/* {myarr.map((ind)=>{
        <img src={ind}/>
      })} */}
      <img className="waifuimg"src={urls} alt='some error occured'/>
    </div>
    <div>
      <button className="navbutton" onClick={handleClick} type="button">
        My Waifu
      </button>
    </div>
  </div>
  )
}

export default Waifu;