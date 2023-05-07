import React from 'react'
import logo from "../images/logo.svg"

export default function Header() {
  return (
    <header style={{ backgroundColor: '#89CBF0', flex: '0 0 auto', color: '#FFFFFF', fontFamily: 'Quicksand, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src={logo} style={{ maxWidth: '90%', height: '100%', objectFit: 'contain' }} />
</header>

  )
}
