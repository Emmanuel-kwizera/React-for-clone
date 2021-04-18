import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            gender:'male',
            emailAddress:'',
            password:'',
            message:'',
            emailChecker: '', 
            signUpMessage:'',  
            errorMessage:'', 
            fieldError: '',       
            existUserName: false,
            existEmail: false,
            redirectToReferrer: false,
            failed: false
        }
        this.signUp = this.signUp.bind(this);
        this.onChange = this.onChange.bind(this);
        this.checkUser = this.checkUser.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value},()=>{
            if(e.target.name === "userName"){
                this.checkUser()
            }else if (e.target.name === "emailAddress") {
                this.checkEmail()
            }
        })
        // console.log(this.state);
    }
    checkUser() {
        let user_name =  this.state.userName;
        axios.get(`https://notepen-backend.herokuapp.com/api/users/checkUsernameExistance/${user_name}`)
          .then(res => {
              this.setState({
                message: res.data.message || ""
              })
          })
    }
    checkEmail(){
        let user_email = this.state.emailAddress;
        axios.get(`https://notepen-backend.herokuapp.com/api/users/checkEmailExistance/${user_email}`)
        .then(res =>{
            // console.log(res.data,user_email);
            this.setState({
                emailChecker: res.data.message || ""
            })
        })
    }
    signUp(){
        // let randomNumber = Math.floor(Math.random() * 34);
        // let profilePicture = {
        //     url: `../assets/User-profiles/Default/user-${randomNumber + 1}.png`,
            // provider: "local",
        // };
        if (this.state.message === "Username Available" && this.state.emailChecker === "Email Available") {
            const user = {
                sur_name: this.state.firstName,
                other_names: this.state.lastName,
                gender: this.state.gender,
                email: this.state.emailAddress,
                password: this.state.password,
                category: "5ff215d2abd99800179d517e",
                // profile: profilePicture.url,
                user_name: this.state.userName
            };
            axios.post(`https://notepen-backend.herokuapp.com/api/users`, user)
            .then(res => {
                console.log(res.data);
                this.setState({
                    signUpMessage: res.data.message
                },()=>{
                    
                // if(!this.state.signUpMessage === "password length must be at least 8 characters long"){
                if(this.state.signUpMessage === "CREATED"){
                    this.setState({
                        redirectToReferrer: true
                    }) 
                }else{
                    console.log(this.state)
                    this.setState({
                        errorMessage: this.state.signUpMessage,
                        failed: true
                    })
                }
                
                })
            })
            .catch((e) => {
                console.log(e);
            })   
            this.setState({
                existUserName: false,
                existEmail: false
            })           
        }else if (this.state.message === "Username Already Taken") {
            this.setState({
                existUserName: true
            })
        }else if (this.state.emailChecker === "Email Already Taken") {
            this.setState({
                existEmail: true
            })
            if (this.state.message === "Username Already Taken") {
                this.setState({
                    existUserName: true
                })
            }else{                
                this.setState({
                    existUserName: false
                })   
            }
        }
    }
  
    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
        }
        return (
            <div id="signup" className="overflow-y-hidden">
                {this.props.visible && (
                    <div className="fixed overflow-y-auto inset-0 flex justify-center items-center z-50">
                        <div className="xl:relative xl:mx-auto xl:w-4/12 xl:max-w-2xl">
                            <div className="bg-white mt-56 mb-12 rounded-2xl w-full p-12">
                                <Link to="/">
                                <span
                                    onClick={this.props.closeModal}
                                    className="absolute right-0 p-2 xl:m-2 mt-0 xl:mr-10 border-solid border-2 border-gray-600 rounded-full mr-24"
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
                                    <div className="form_tittle main text-left text-xl mt-1 mb-5 font-bold">Sign Up
                                    </div> 
                                    {this.state.failed && (
                                        <div className="failed pl-3 pb-2"><p>{this.state.errorMessage}</p></div>
                                    )}
                                    {this.state.existUserName && (
                                        <div className="failed pl-3 pb-2"><p>User Name Unavilable! Try Using An Other</p></div>
                                    )}
                                     {this.state.existEmail && (
                                        <div className="failed pl-3 pb-2"><p>Email Unavilable! Try Using An Other</p></div>
                                    )}
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Enter First Name</label>
                                        <input
                                            name="firstName" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="email" onChange={this.onChange}/>
                                    </div>      
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Enter Last Name</label>
                                        <input
                                            name="lastName" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="email" onChange={this.onChange}/>
                                    </div>   
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Enter User Name</label>
                                        <input
                                            name="userName" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="email" onChange={this.onChange}/>
                                    </div> 
                                    <div className="text-left mt-1">     
                                        <label className="text-gray-600 block">Choose Your Gender</label>
                                        <select name="gender" className="text-gray-600 pl-4 pr-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full" onChange={this.onChange}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>    
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Enter Email address</label>
                                        <input
                                            name="emailAddress" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="email" onChange={this.onChange} />
                                    </div>      
                                    <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Create Password</label>
                                        <input
                                            name="password" className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="password" onChange={this.onChange}/>
                                    </div>        
                                    {/* <div className="text-left mt-1">
                                        <label className="text-gray-600 block">Confrim Password</label>
                                        <input
                                            className="pl-4 outline-none my-2 p-2 w-10/12 border-solid border-2 border-gray-500 rounded-full"
                                            type="password"/>
                                    </div>   */}
                                    <div className="text-left">
                                        {/* <Link to="/error"> */}
                                        <button name="addData" className="bg-main focus:outline-none w-10/12 text-white p-3 px-10 rounded-3xl mt-4" onClick={this.signUp}>Sign Up
                                        </button>
                                        {/* </Link> */}
                                    </div>                                     
                                    <p className="text-left py-3 text-gray-700">Already have an account? <Link to="/login" className="text-left text-sm text-black font-normal">Sign In</Link>
                                    </p>                           
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
 
export default Signup;