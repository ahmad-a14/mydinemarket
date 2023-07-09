import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <Image src={logo} alt="Logo" />
    </div>
  )
}
