import Popup from 'reactjs-popup'
import SelectionType from './selectionType/SelectionType'
const Login = () => {
   

  return (
    <div>
        <h2>Login Page</h2>


       
        <Popup trigger={<p>Don't have an account <a href="#">Register</a> yourself</p>}>
            <SelectionType/>
        </Popup>

        
    </div>
  )
}
export default Login;
  