import Popup from 'reactjs-popup'
import SelectionType from './selectionType/SelectionType'
import './login.css'
const Login = () => {
   

  return (
    <div className='parent-div'>
        <h2>Welcome</h2>

        <div className='form-div'>
            <form className='login-form'>
                <input type='email' placeholder='Email'/><br />
                <input type='password' placeholder='Password'/><br />
                <input type='submit' value='Signin'/>
            </form>
        </div>

       
        <Popup trigger={<p>Don't have an account <a href="#">Register</a> yourself</p>}>
            <SelectionType/>
        </Popup>

        
    </div>
  )
}
export default Login;
  