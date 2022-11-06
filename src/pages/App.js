import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import '../style/style.css';

export default function App() {

  const [username,setun]=useState('');
  const [content,setcm]=useState('');

  function funbutton1() {

    // var unarr=[];
    // unarr.push(username,content);
    // alert(unarr[1]);
    localStorage.setItem(username,content)
    // var x=localStorage.getItem(localStorage.key(0))
    
  
    document.getElementById('text1').value='';
    document.getElementById('text2').value='';
    
    ReactDOM.render(<App/>,document.getElementById('root'));
  }


  

  return (
    <div>

      <div className="shuruqv">
        <form>
        <h3 className="title"><b>user name</b></h3>
        <input className="text" id='text1' onChange={() => setun(document.getElementById('text1').value)} type="text"></input>
        <h3 className="title"><b>comment content</b></h3>
        <input className="text" id='text2' onChange={() => setcm(document.getElementById('text2').value)} type="text"></input>
        <br></br>
        <input className="button1" type="submit" value="提交" onClick={funbutton1}></input>
        </form>
      </div>
      
      {/* <div className="pinglunqv">
        <form action="">
            <h3 className="title"><b>第一个用户{username}</b></h3>
            <p>第一条评论{content}</p>
            <input className="button1" type="button" value="删除"></input>
        </form>
      </div> */}
      <div>
        <Commentast/>
      </div>

      
    </div>
  )
}



function Comment(props) {
  // var ind
  // for(ind in localStroage.getItem()){
  //   "111"
  // }
  // var ind=props.index;
  // alert(props.index)
  return (

    <div className="pinglunqv">
      <form action="">
          <h3 className="title"><b>{props.k}</b></h3>
          
          <p>{props.val}</p>
          {/* <input className="button1" onClick={localStorage.removeItem(localStorage.key(props.k))} type="button" value="删除"></input> */}
          <input className="button1" type="button" value="删除"></input>
      </form>
    </div>
  );
}

function Commentast(){

  //localStorage.clear();  
  var arr=[]; 
  // var i=0;
  // alert(localStorage.length);
  for(let i=0; i < localStorage.length; i++){
    // alert(i);
    var localkey=localStorage.key(i);
    var localval=localStorage.getItem(localkey);
    // alert(localkey);
    // alert(localval);
    // ReactDOM.render(<Comment key={localkey} val={localval}/>,document.getElementById('root'));
    arr.push(<Comment val={localval} k={localkey} index={i}/>);
  }
  return arr;
}




