import './LogInPage.css'
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin';
import { useNavigate } from 'react-router-dom'
import { useState, useHistory, useRef } from 'react';
import { useEffect } from "react";


function LogInPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const passWord = () => {
        if(email=="abc@gmail.com" && password=="12345"){
            alert("Successfully Signed In !")
            lassana();
        }
        else{
            alert("Wrong Username or Password")
        }
    }

    const navigate = useNavigate();

    const lassana = () => {
        navigate("/main")
    }



    return (
        <div>

            <NavBarLogin />
            <div class="dd1">

                <div class="dd2">
                    <div class="dd3">
                        <div className='xxx'>
                            <div className='xxxx'></div>
                        </div>
                    </div>

                    <div class="dd4">

                        <div class="ii1">ADMIN | LOGIN</div>

                        <div class="ii2">
                            <div class="ii3"></div>
                        </div>

                        <div class="ii4">
                            <div class="ii5">Email</div>
                            <input class="ii6" type='email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div class="i4">
                            <div class="ii5">Password</div>
                            <input class="ii6" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div class="ii7">
                            <input type="checkbox" />
                            <div class="ii8">Remember Me</div>
                        </div>

                        <div class="ii9">
                            <button class="ii10" onClick={passWord} >Sign In</button>
                            {/* <button class="ii11" >Register</button> */}
                        </div>

                    </div>

                </div>

            </div>
            <div className='fff1'>
                <p className='fff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
            </div>

        </div>
    );
}
export default LogInPage