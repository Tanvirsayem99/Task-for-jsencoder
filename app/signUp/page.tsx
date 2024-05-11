import Image from 'next/image';
import './singUp.css'
import defaultImage from '@/public/default.jpeg'
const page = () => {
    return (
        <div className="singUppage">
            <form action="">
                <Image className='img' src={defaultImage} alt='default' />
                <span>SignUp</span>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm password' />
                <button>SingUp</button>
            </form>
        </div>
    );
};

export default page;