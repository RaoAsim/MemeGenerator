import { useEffect, useState } from "react";
import Nav from "./Navbar";

function Meme() {
    const[memedata,setmemedata]=useState([])
    const [meme,setMeme]=useState({
        url:"./TrollFace.png",
        toptext:"",
        bottomtext:""
    })
    useEffect(()=>{
        async function getmeme(){
            const res=await fetch("https://api.imgflip.com/get_memes")
            const data=await res.json()
            setmemedata(data.data.memes)
        }
        getmeme()
    },[]);

    function handleChange(event){
         const {name,value}=event.target
         setMeme(preState=> ({...preState,[name]:value}))
    }
    function memegen(){
        const randomNumber=Math.floor(Math.random()*memedata.length)
        const urlrtn=memedata[randomNumber].url
        setMeme(preState=> ({...preState,url:urlrtn}))

    }
  return (
    <>
    <Nav />
    <main>
      <div className="form" >
        <input name="toptext" value={meme.toptext} onChange={handleChange}  type="text" className="form-input" />
        <input name="bottomtext" value={meme.bottomtext} onChange={handleChange} type="text" className="form-input" />
        <button  onClick={memegen} className="form-button">Get a new meme image</button>
      </div>
      <img className="image" src={meme.url}></img>
      <h1 className="main-top">{meme.toptext}</h1>
      <h1 className="main-bottom">{meme.bottomtext}</h1>
    </main>
    </>
  );
}
export default Meme;

