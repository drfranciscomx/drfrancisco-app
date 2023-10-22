'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ContainerComponent from '@/components/containers/ContainerComponent'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(username === '' || email === '' || password === ''){
        toast.error("Fill all fields")
        return
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters")
        return
    }

    try {
        const res = await fetch('https://drfrancisco-app-tkar.vercel.app/api/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({username, email, password})
        })

        if(res.ok){
            toast.success("Successfully registered the user")
            setTimeout(() => {
                signIn()
            }, 1500)
            return
        } else {
            toast.error("Error occured while registering")
            return
        }
    } catch (error) {
        console.log(error)
    }
  }

    return (
        <ContainerComponent>
            <div className={`wrapper flex flex-col text-center py-20 w-1/3 items-center justify-center mx-auto`}>
                <h2 className='my-4 text-white '>Registro Nuevo</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                    <input className='text-center py-2' type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                    <input className='text-center py-2' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input className='text-center py-2' type="password" placeholder='Contraseña...' onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className={`bg-black text-white py-4 text-xl hover:bg-yellow-600 duration-700 rounded-md`}>Registrame</button>
                    <button className={`text-white `} onClick={() => signIn()}>
                        Ya tienes una cuenta? <br /> Inicia Session.
                    </button>
                </form>
            </div>
            <ToastContainer />
        </ContainerComponent>
    )
}

export default Register