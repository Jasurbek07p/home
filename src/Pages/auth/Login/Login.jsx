// import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import loginPageImage from '../../../assets/assets/others/authentication2.png'
import Gobackbtn from '../../../Components/Gobackbtn/Gobackbtn';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const captachRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { login, user, googleSignIn } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleCaptchaReload = () => {
        // Reload the captcha
        loadCaptchaEnginge(6);
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                //const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                //const email = error.customData.email;
                // The AuthCredential type that was used.
                //const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleFrom = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user_captcha_value = form.captcha.value;
        console.log(form, email, password)
        login(email, password)
            .then((result) => {
                console.log(result)
                form.reset()
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful!",
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { errorMessage },
                    footer: '<a href="#">Why do I have this issue? Help</a>'
                });
            })


    }
    console.log(user)

    const handleCaptchaValidation = () => {
        const user_captcha_value = captachRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            setIsDisabled(false)
            // alert('Captcha Matched');
            toast.success('Captcha Matched!')
        }
        else {
            setIsDisabled(true)
            toast.error('Failed Captcha!')
        }
    }

    return (
        <div
            style={{
                boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"
            }}
            className='my-5 p-4' >
            <div className='md:ps-0'>
                <Gobackbtn></Gobackbtn>
            </div>
            <div className="md:flex  gap-[50px] items-center">
                <img className='md:w-[600px' src={loginPageImage} alt="" />
                <form onSubmit={handleFrom} className='mt-0 space-y-2 px-[60px] w-full'>
                    <h4 className='text-4xl font-bold text-[#151515] text-center'>Login</h4>
                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Email</label>
                        <input id='email' name='email' type="email" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Enter the email" required />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Password</label>
                        <input id='' name='password' type="password" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Enter the password" required />
                    </div>

                    <div className='space-y-2'>
                        <label className='text-xl text-[#444] font-semibold' >Captcha</label>
                        <div className='flex flex-col items-start'>
                            <div className='border rounded-lg border-[#D0D0D0] px-2 py-2 w-full'>
                                <LoadCanvasTemplate reloadText=" " />
                            </div>
                            <button
                                onClick={() => handleCaptchaReload()}
                                className='text-[#5D5FEF] mt-2 font-semibold'>
                                Reload Captcha
                            </button>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <input ref={captachRef} name='captcha' type="text" className="w-full h-[55px] ps-4 border rounded-lg border-[#D0D0D0]" placeholder="Type the captcha" required />
                    </div>

                    <button
                        type="button"
                        onClick={() => { handleCaptchaValidation() }}
                        style={{ background: '#5D5FEF', borderRadius: '8px' }}
                        className='btn w-full text-white font-semibold'>Validate</button>

                    <button
                        disabled={isDisabled}
                        type='submit'
                        style={{ background: 'rgba(209, 160, 84, 0.70)', borderRadius: '8px' }}
                        className='btn w-full text-white'>Sign In</button>

                    <p className='text-center text-[#D1A054]'>New here? <Link to='/signup'><strong>Create a New Account</strong></Link></p>
                    <p className='text-center'>Or sign in with</p>
                    <div className='flex gap-5 text-xs justify-center text-[#444'>
                        <div className=' btn border border-[#444] p-2 rounded-3xl w-12'>
                            <FaFacebookF />
                        </div>
                        <div onClick={() => handleGoogleLogin()} className=' btn border border-[#444] p-2 rounded-3xl w-12'>
                            <FaGoogle />
                        </div>
                        <div className='btn border border-[#444] p-2 rounded-3xl w-12'>
                            <FaGithub className='' />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;