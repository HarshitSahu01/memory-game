import React, {useState} from 'react'

export default function Test() {
    const [data, setData] = useState({
        username:'',
        password:'',
    });
  return (
    <div>
      <div>
        username: 
        <input 
            type='text' 
            value={data.username} 
            onChange={(e)=>setData({username:e.target.value})} 
        />
      </div>
      <div>
        password: 
        <input 
            type='text' 
            value={data.password} 
            onChange={(e)=>setData({password:e.target.value})} 
        />
      </div>
    </div>
  )
}
