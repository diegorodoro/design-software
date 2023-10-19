import React, {useState} from 'react'

const Login = () => {
    const [user, setUser]=useState('')
    const [password, setPassword]=useState('')

    const onChangeUser=(e)=>{
        setUser(e.target.value)
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onChange=(e)=>{
        if(e.target.name==='user'){
            setUser(e.target.value)
        }
        else if(e.target.name==='pass'){
            setPassword(e.target.value)
        }
    }


  return (
    <>
        <div>login</div>
        <form action="">
            <p>User: {user}</p>
            <p>Pass: {password}</p>
            <div>
                <label htmlFor='user'>Usuario</label>
                <input type='text' name="user" id='user' 
                    value={user} 
                    onChange={(e)=>{onChange(e)}}>    
                </input>
            </div>
            <div>
                <label htmlFor='pass'>Password</label>
                <input type='password' name="pass" id='pass'
                    onChange={(e)=>{onChange(e)}}>    
                </input>
            </div>
            <button type='submit'>Iniciar Sesion</button>
        </form>
    </>
  )
}

export default Login;
