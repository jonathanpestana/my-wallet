'use client';

import React from 'react'

function Wallet() {
  const name = localStorage.getItem('name')
  return (
    <>
      <div>Wallet app</div>
      <h1>Olá { name }</h1>
    </>
  )
}

export default Wallet