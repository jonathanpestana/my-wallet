'use client';

import React from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  function handleClick(event) {
    event.preventDefault()
    localStorage.setItem('name', name)
    router.push('/wallet')
    console.log('clicked')
    console.log('nome', name);
  };

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <main className="bg-white flex flex-col items-center self-center text-center space-y-5 w-1/3 h-1/2">
      <h1>Minha Carteira</h1>
      <form>
        <label>
          Nome
          <input className="w-full border" type="text" onChange={ handleChange } />
        </label>
        <button className="w-full" onClick={ handleClick }>Entrar</button>
      </form>
    </main>
  )
};
