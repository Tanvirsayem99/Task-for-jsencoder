import Image from 'next/image';
import './singIn.css'
import defaultImage from '@/public/default.jpeg'
const page = () => {
    
    return (
        <div className="singInpage">
            <form action="">
                <Image className='img' src={defaultImage} alt='default' />
                <span>SignIn</span>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <p>don't have an account? please signUp</p>
                <button>SingIn</button>
            </form>
        </div>
    );
};

export default page;