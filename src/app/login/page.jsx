"use client"
import React from 'react'
import ContainerComponent from '@/components/containers/ContainerComponent';
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (password === "" || email === "") {
            toast.error('Fill all fields!')
            return
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long')
            return
        }
        try {
            const res = await signIn('credentials', {email, password, redirect: false})

            if (res?.error ==null) {
                router.push('/servicios')
            }else {
                toast.error("Error occured while loggin")
            }

        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
        <ContainerComponent>
            <div className='h-[80vh]'>
                <h2 className='flex justify-center py-5 text-white'>Iniciar Session</h2>
                <form className='flex flex-col justify-center items-center text-center gap-y-2' onSubmit={handleSubmit}>
                    <input 
                    className='text-center py-2'
                    type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input className='text-center py-2' type="password" placeholder='Contraseña...' onChange={(e) => setPassword(e.target.value)} />
                    <button className='bg-black text-white w-[150px] p-2 rounded-md mt-5'>Entrar</button>
                    <Link className='text-xs text-center mt-1 text-white' href={`/registro`}>
                        Aun no tienes una cuenta? <br /> Registro aqui.
                    </Link>
                </form>
            </div>
            <ToastContainer />
        </ContainerComponent>
    </>
  )
}

export default Login