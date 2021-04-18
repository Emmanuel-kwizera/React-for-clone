import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarData from "./NavbarData.json"
// import { MobileNav } from "./MobileNav";

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayNav: false,
            rightLinks : [
                {
                    id: 1,
                    text: "Sign in",
                    link: "/login"
                },
                {
                    id: 2,
                    text: "Signup",
                    isActive: true,
                    link: "/signup"
                }
            ]
        }
        this.click = this.click.bind(this);
    }
    click(){
        this.setState({
            displayNav: !this.state.displayNav
        })
    }
    render() {
        const similarClasses = "pr-8";
        const navbarClasses = "hideContent top-menu xl:right-0 xl:pt-6 xl:w-9/12 xl:absolute xl:text-center lg:right-0 lg:pt-6 lg:w-9/12 lg:absolute lg:text-center";
        // const Displayclass = "block"
        if(this.state.displayNav){
        }
        return (
            <div>
                <div className="icon-responsive-display">
                    <div onClick={this.click} className="icon h-12 w-12 rounded-full bg-blue-100 p-3 mr-5 lg:hidden xl:hidden menuDisplay">
                        <Link to="/navigation">
                            <svg id="menu-3-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path id="Path_17" data-name="Path 17" d="M0,0H24V24H0Z" fill="none"/>
                                <path id="Path_18" data-name="Path 18" d="M3,4H21V6H3Zm6,7H21v2H9ZM3,18H21v2H3Z" fill="#1c74fc"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={navbarClasses} id="nav-bar">
                    {
                        NavbarData.map(item=>(
                        <Link key={item.id} to={item.link} className="pr-8 text-black-200 samp">{item.title}</Link>
                        ))
                    }
                    <div className="float-right pl-16 pr-20">
                        {
                            this.state.rightLinks.map(element=>{
                                return <Link to={element.link} key={element.id}  className={element.isActive ?similarClasses + " bg-blue-1000 text-white p-3 px-8 rounded-3xl mt-4":similarClasses}>{element.text}</Link>
                            })
                        }
                    </div>
                </div>
                {/* <div className={this.state.displayNav ? Displayclass + navbarClasses : "hidden"}>
                    <MobileNav/>
                </div> */}
            </div>
        )
    }
}

export default Navbar
