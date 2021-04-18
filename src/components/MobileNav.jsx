import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarData from "./NavbarData.json"

export class MobileNav extends Component {
    render() {
        return (
            <div>
                <div className="flex w-full">
                    <div className="log-nav-container block mt-4 w-1/2">
                        <div className="log-container">
                            <Link to="/">
                                <div className="logo bg-blue-1000 w-12 h-12 rounded-xl p-3 ml-8 mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 43 40">
                                        <text id="NP" transform="translate(0 32)" fill="#fff" fontSize="30" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">NP</tspan></text>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="close-icon-container w-1/2 mr-6 mt-4 float-right" id="close">
                        <Link to="/">
                            <div className="close-icon p-5 rounded-full bg-blue-100 float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)" fill="#1C74FC"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="NavBar-display mt-6">
                    <ul>
                        {
                            NavbarData.map(item=>(
                                <li key={item.id} className="font-light text-2xl pb-6 pl-8 text-black-100">
                                    <Link to={item.link} className="pr-8 samp">{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="sign-in-up">
                        <div className="sign-up ml-4 mt-10 mb-12">
                            <Link to="/signup" className="rounded-2xl bg-blue-1000 text-white text-2xl ml-3 px-24 py-5">Get Started</Link>
                        </div>
                        <div className="sign-in ml-4">
                            <div>
                                <Link to="/login" className="border-none text-2xl text-blue-600 ml-3 px-32 pt-4 pb-4">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav
