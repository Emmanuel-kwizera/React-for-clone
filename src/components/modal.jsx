import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import {PostData} from './reusable/PostData'
const jwt = require("jsonwebtoken");
// import jwt from 'jwt-decode'

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            failed: false,
            redirectToReferrer: false
        }
        this.signIn = this.signIn.bind(this);
        this.oncChange = this.oncChange.bind(this);
    }
    oncChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    async signIn(){
        await PostData(this.state)
        .then((result) => {
            let responseJson = result;
            console.log(responseJson);
            if(!responseJson.data){
                sessionStorage.clear();
                this.setState({
                    failed: true
                })
            }else {
                let randomNumber = Math.floor(Math.random() * 34);
                const token = responseJson.data;
                var decode = jwt.decode(token);
                console.log(decode);
                sessionStorage.setItem("token",token)
                var user_name = decode.user_name;
                let upperText = `user/${randomNumber}/${user_name}`;
                console.log(user_name);
                console.log(upperText);
                this.setState({
                    failed: false,
                    redirectToReferrer: true
                })
            }
        })
        console.log("request ended")
    }
    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'}/>)
        }
        return (
            <div id="login">
                {this.props.visible && (
                    <div
                        className="fixed overflow-x-auto overflow-y-auto inset-0 flex justify-center items-center z-50">
                        <div className="xg:relative lg:mx-auto lg:w-4/12 lg:max-w-2xl xl:relative xl:mx-auto xl:w-4/12 xl:max-w-2xl">
                            <div className="bg-white rounded-2xl w-full p-12">
                                <Link to="/">
                                {/* <span
                                    onClick={this.props.closeModal}
                                    className="absolute right-0 p-2 xl:m-2 mt-0 xl:mr-10 border-solid border-2 border-gray-600 rounded-full mr-24"
                                > */}
                                <span
                                    onClick={this.props.closeModal}
                                    className="absolute right-0 p-2 xl:m-2 mt-0 xl:mr-10 border-solid border-2 border-gray-600 rounded-full mr-16"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13.426"
                                        height="13.423"
                                        viewBox="0 0 13.426 13.423"
                                    >
                                        <path
                                            id="Icon_ionic-ios-close"
                                            data-name="Icon ionic-ios-close"
                                            d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                                            transform="translate(-11.285 -11.289)"
                                        />
                                    </svg>
                                </span>
                                </Link>
                                <div className="w-full">
                                    <div className="form_tittle main text-left text-xl mt-1 mb-5 font-bold">Sign In
                                    </div>
                                    {this.state.failed && (
                                    // <div className="failed text-center" id="invalid-cont">
                                    <div className="failed pl-3" id="invalid-cont">
                                        Invalid Email or Password! Try again.
                                    </div>
                                    )}
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Email address</label>
                                        <input
                                            name="email" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="email" onChange={this.oncChange}/></div>
                                    <div className="text-left">
                                        <label className="text-gray-600 block">Password</label>
                                        <input
                                            name="password" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="password" onChange={this.oncChange}/>
                                    </div>
                                    <Link to="/forget" className="block text-left text-sm underline my-1">Forgot password?</Link>
                                    <div className="text-left">
                                        <button className="bg-main focus:outline-none w-10/12 text-white p-3 px-10 rounded-3xl mt-4" onClick={this.signIn}>Sign
                                            In
                                        </button>
                                    </div>                                    
                                    <p className="text-left py-3 text-gray-700">Don't have an account? <Link to="/signup" className="text-left text-sm text-black font-normal">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {this.props.visible && (
                    <div className="fixed inset-0 z-40 opacity-25 bg_light_gray"></div>
                )}
            </div>
        );
    }
}

export default Modal;
// module.exports.decoded = decode;
