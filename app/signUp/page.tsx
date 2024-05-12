'use client';
import Image from 'next/image';
import './singUp.css'
import defaultImage from '@/public/default.jpeg'
import { SignUpHook } from "@/hooks/signUpHook/SignUpHook";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Features/authSlice';
const page = () => {
    const auth = useSelector((state)=>state.auth)
    console.log(auth.email.email)
    const dispatch = useDispatch()
    const handleSubmit=(event:any)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const user = {name,email,password,confirmPassword, token:null}
        const storUser = {email}
        SignUpHook(user)
        dispatch(login(storUser))
    }
    return (
        <div className="singUppage">
            <form action="" onSubmit={(e)=>handleSubmit(event)}>
                <Image className='img' src={defaultImage} alt='default' />
                <span>SignUp</span>
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name='email' placeholder='Email'/>
                <input type="password" name='password' placeholder='Password' />
                <input type="password" name='confirmPassword' placeholder='Confirm password' />
                <p>Already have an account? please signIn</p>
                <button>SingUp</button>
            </form>
        </div>
    );
};

export default page;