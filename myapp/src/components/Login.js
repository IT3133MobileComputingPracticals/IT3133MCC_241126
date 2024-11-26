import {useNavigate} from 'react-router-dom'

export default function Login(){
    
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dash')
    }

    return(
        <>
            <div>
                <h1>Login Here: </h1>
                <div >Username:<input type='text' name='username'/></div>
                <div>Password:<input type='password' name='password'/></div>
                <button onClick={authenticate}>Login</button>
            </div>
        </>
    )
}