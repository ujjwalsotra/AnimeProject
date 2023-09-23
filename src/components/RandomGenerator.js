import React,{useState,useNavigate} from "react";

const RandomGenerator = () => {
    const[infield,setInfield]=useState('');
    let navigate=useNavigate();
    const handleClick = () => {
      console.log(infield);
      navigate('/Char',{state:{name:infield}});
    }
  return (
    <div>
       {/* <div>
        <input
          type="search"
          placeholder="search gif"
          value={infield}
          onChange={(e) => {
            setInfield(e.target.value);
          }}
        />
        <button className="navbutton" onClick={handleClick} type="button">
          Bankai
        </button>
      </div>  */}
      <p>Hello</p>
    </div>
  );
};

export default RandomGenerator;
