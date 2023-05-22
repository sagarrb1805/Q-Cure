import Popup from 'reactjs-popup'
import SelectionType from './selectionType/SelectionType'
const Login = () => {
   

  return (
    <div>
        <h2>Welcome</h2>

        <form>
            <input type='email' placeholder='Email'/><br />
            <input type='password' placeholder='Password'/><br />
            <input type='submit' value='Signin'/>
        </form>

       
        <Popup trigger={<p>Don't have an account <a href="#">Register</a> yourself</p>}>
            <SelectionType/>
        </Popup>

        
    </div>
  )
}
export default Login;
  