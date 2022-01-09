import FacebookLogin from 'react-facebook-login'
import { useState } from 'react'
const Facebook=()=>{

const responseFacebook=(response)=>{
setData({
    isLoggedin:true,
    userID:response.userID,
    name:response.name,
    email:response.email,
    picture:response.picture.data.url,
})
}
const logout=()=>{
setData({isLoggedin:false})
}

    const componentClicked=()=>{
        console.log('clicked')
    }
    let fbContent
    const[data,setData]=useState({
        isLoggedin:'',
        userID:'',
        name:'',
        email:'',
        picture:'',
    })
    if(data.isLoggedin){
      fbContent=(
          <div style={{width:'480px',
          margin:'auto',
          background:'#f4f4f4',
          padding:'20px'}}>
              <img height={150} width={150} src={data.picture} alt={data.name} style={{'border-radius':100}}/>
              <h2>Welcome {data.name}</h2>
              email:{data.email}<br/><br/>
              <button className='btn btn-primary' onClick={logout}>LOGOUT</button>
          </div>
      )
    }else{
        fbContent=(
        <FacebookLogin
        appId="1768376430027101"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />)
    }
    return(
        <div>{fbContent}</div>
    )
}
export default Facebook