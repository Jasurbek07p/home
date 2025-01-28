// import React from 'react';
import { useContext } from 'react';
import loginPageImage from '../../../assets/assets/others/authentication2.png'
import Gobackbtn from '../../../Components/Gobackbtn/Gobackbtn';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    // const [error, setError] = useState('')
    const { signup, googleSignIn } = useContext(AuthContext)
    // console.log(user)
    // console.log(signup)
    const handleFrom = (event) => {
        event.preventDefault()
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // setError('')
        // const user_captcha_value = form.captcha.value;
        // console.log(form, name, email, password)
        signup(email, password)
            .then(() => {
                // Signed up 
                //console.log(userCredential)
                //const user = userCredential.user;
                Swal.fire({
                    title: "Good job!",
                    text: "Account Created Successfully!",
                    icon: "success"
                });

                //console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage)
                // setError(errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { errorMessage },
                    footer: '<a href="#">Why do I have this issue? Help</a>'
                });

            });

    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                //const user = result.user;
                Swal.fire({
                    title: "Good job!",
                    text: "Account Created Successfully!",
                    icon: "success"
                });
            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { errorMessage },
                    footer: '<a href="#">Why do I have this issue? Help</a>'
                });
            });
    }

    return (
        <div
            style={{
                boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"
            }}
            className='my-5 p-4'>
            <div className='ps-10 md:ps-0'>
                <Gobackbtn></Gobackbtn>
            </div>
            <div className="md:flex md:flex-row-reverse gap-[50px] items-center">
                <img className='md:w-[600px] md:h-[400px] ' src={loginPageImage} alt="" />
                <form onSubmit={handleFrom} className='mt-0 space-y-4 px-[60px] w-full'>
                    <h4 className='text-4xl font-bold text-[#151515] text-center'>Sign Up</h4>
                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Name</label>
                        <input id='text' name='name' type="name" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Enter the name" required />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Email</label>
                        <input id='email' name='email' type="email" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Enter the email" required />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Password</label>
                        <input id='' name='password' type="password" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Enter the password" required />
                    </div>

                    <button
                        type='submit'
                        style={{ background: 'rgba(209, 160, 84, 0.70)', borderRadius: '8px' }}
                        className='btn w-full text-white'>Sign In</button>

                    <p className='text-center text-[#D1A054]'>Already registered?  <Link to='/login'><strong>Go to log in</strong></Link></p>
                    <p className='text-center'>Or Sign up with</p>
                    <div className='flex gap-5 text-xs justify-center text-[#444'>
                        <div className=' btn border border-[#444] p-2 rounded-3xl w-12  '>
                            <FaFacebookF />
                        </div>
                        <div onClick={() => handleGoogleLogin()} className=' btn border border-[#444] p-2 rounded-3xl w-12'>
                            <FaGoogle />
                        </div>
                        <div className=' btn border border-[#444] p-2 rounded-3xl w-12'>
                            <FaGithub />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
// import React from 'react';

