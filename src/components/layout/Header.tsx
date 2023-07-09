import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import {ShoppingCart} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <div className="flex bg-slate-700 justify-between items-center py-6 px-8" >
        <Image  src={logo} alt="Logo" className="w-40" />
        <ul className="flex gap-x-10 ">
            <li  className="text-lg"><Link href={"/"}>Female</Link> </li>
            <li  className="text-lg"><Link href={"/"}>Male</Link></li>
            <li  className="text-lg"><Link href={"/"}>Kids</Link></li>
            <li  className="text-lg"><Link href={"/"}>All products</Link></li>
        </ul>
        <Input placeholder="Search" className="w-30 h-8" />
        <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center"> <ShoppingCart className="h-6 w-6" /> </div>
    </div>
  )
}
