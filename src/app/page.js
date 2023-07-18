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
    <main>
      <form>
        <label>
          Nome
          <input type="text" onChange={ handleChange } />
        </label>
        <button onClick={ handleClick }>Entrar</button>
      </form>
    </main>
  )
};
