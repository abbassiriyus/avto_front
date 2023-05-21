import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"
import { AiOutlineUser } from "react-icons/ai"
import { HiUsers } from "react-icons/hi"
import { BiMenuAltLeft } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import "../css/Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="modalMenu">
                <MdClose className='close_btn' />
                <div className="a_box">
                    <a href="#" className='a_fff a_mobile'>Home</a>
                </div>
                <div className="a_box">
                    <a href="#" className='a_fff a_mobile'>Search</a>
                </div>
                <div className="a_box">
                    <a href="#" className='a_fff a_mobile'>Listing</a>
                </div>
                <div className="a_box">
                    <a href="#" className='a_fff a_mobile'>Pages</a>
                </div>
                <div className="a_box">
                    <a href="#" className='a_fff a_mobile'>More</a>
                </div>
            </div>
            <BiMenuAltLeft className='menuLeftIcon' />
            <div className="navbar_left">
                <a href='/' className="logo">
                    <Image src={logo} width={200} height={'auto'} alt="" />
                </a>
                <a href="#" className='a_fff'>Home</a>
                <a href="#" className='a_fff'>Search</a>
                <a href="#" className='a_fff'>Lising</a>
                <a href="#" className='a_fff'>Pages</a>
                <a href="#" className='a_fff'>More</a>
            </div>
            <div className="navbar_right">
                <div className="loginIn">
                    <AiOutlineUser className='user_icon' />
                    <a href="#" className='a_fff'>Login In</a>
                </div>
                <a href="#" className='a_fff'>Register</a>
            </div>
            <HiUsers className='usersIcon' />
        </div>
    )
}
