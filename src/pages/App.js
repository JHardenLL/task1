import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import '../style/style.css';

export default function App() {
  return (
    <div>

      <div className="shuruqv">
        <form>
        <h3 className="title"><b>user name</b></h3>
        <input className="text" type="text"></input>
        <h3 className="title"><b>comment content</b></h3>
        <input className="text" type="text"></input>
        <br></br>
        <input className="button1" type="submit" value="提交" onClick={funbutton1}></input>
        </form>
      </div>
      
      <div className="pinglunqv">
        <form action="">
            <h3 className="title"><b>thy</b></h3>
            <p>这是第一条评论</p>
            <input className="button1" type="button" value="删除"></input>
        </form>
    </div>
    </div>
  )
}

  

function funbutton1() {
  
  
  var string1=document.getElementById('text1').value;
  var localStroage=[];



  document.getElementById('text1').value='';
  document.getElementById('text2').value='';
  


  const elem=<h2>hello</h2>
  ReactDOM.render(<Hook/>,document.getElementById('root'));
}

function Hook(){
  const [username,setun]=useState('first');


  return (
    <div>
      <p>{username}</p>
      <button id='button1' onClick={() => setun(username+"1")}>
        Click me
      </button>
    </div>
  );
}




