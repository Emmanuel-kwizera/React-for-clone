import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './reusable/Footer'

export class Webpage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="home" className="xl:w-full xl:flex">
                    <div className="xl:w-1/2 xl:h-40">
                        <div className="logo xl:w-16 xl:h-16 xl:p-3 bg-blue-1000 xl:rounded-2xl xl:ml-16 xl:mt-4 w-12 h-12 rounded-lg p-1 mt-2 ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 43 40">
                                <text id="NP" transform="translate(0 32)" fill="#fff" fontSize="30" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">NP</tspan></text>
                            </svg>
                        </div>
                        <div className="xl:mt-48 xl:ml-12 mt-10">
                            <p className="xl:text-4xl xl:font-semibold pre xl:pb-10 lg:text-4xl pre lg:pb-10 md:text-4xl pl-6 pt-5 text-2xl font-semibold pb-4">With NotePen writing books <br /> has never been this fun.</p>
                            <p className="text-gray-500 lg:text-2xl xl:text-2xl text-md top-text-style pl-6">Write books Ease with Our Book wirting app NotePen</p>
                            <div className="xl:mt-10 xl:m-auto xl:flex block mt-6 ml-4">
                                <div className="mb-12">
                                    <Link to="/signup" className="mt-4 xl:pt-4 xl:pb-4 xl:pl-8 xl:pr-8 rounded-2xl bg-blue-1000 text-white ml-3 pl-24 pr-24 pt-5 pb-5">Get Started</Link>
                                </div>
                                <div>
                                    <Link to="/login" className="xl:ml-10 xl:pt-4 xl:pb-4 xl:pl-12 xl:pr-12 rounded-2xl border-2 border-blue-600 text-blue-600 ml-3 padding-button pt-4 pb-4">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:bg-blue-100 xl:top-0 xl:w-1/2 xl:float-right">
                        <div className="xl:h-64 xl:w-9/12 m-auto xl:ml-24 xl:mt-48 mb-54 bg-white rounded-3xl border-2 border-gray-400 h-56 w-64 mt-20 ml-8"></div>
                    </div>
                </div>

                {/* FEATURES PART OF  WEB-SITE */}
                <div id="features" className="xl:w-full xl:flex xl:mt-24 block md:block mb-10">
                    <div className="xl:w-1/4 xl:ml-20 lg:w-1/4 lg:ml-20 md:w-full w-full">
                        <div className="icon-part rounded-full xl:ml-16 w-48 h-48 p-16 pl-18 orange-bg mx-20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46.179" height="74.924" viewBox="0 0 46.179 74.924">
                                <g id="noun_easy_2509532" transform="translate(-19.986 -1.218)">
                                    <path id="Path_12" data-name="Path 12" d="M39.665,1.219a14.584,14.584,0,0,0-5.471,28.1l-.008-2.1a12.667,12.667,0,1,1,10.894.03v2.094A14.583,14.583,0,0,0,39.665,1.218Zm-.014,13.852a4.53,4.53,0,0,0-4.624,4.421L35.1,45.139l-8.08-7.679a4.139,4.139,0,0,0-2.85-1.143A3.8,3.8,0,0,0,21.4,37.492l-.433.455A3.631,3.631,0,0,0,20,40.757a5.094,5.094,0,0,0,1.131,2.706L34.613,60.557c.006.008.051.069.113.159s.137.245.111.176c-.011-.03.041.19.06.358.017.15.024.246.026.27v2.937H32.677a2.054,2.054,0,0,0-1.7,1.046,3.646,3.646,0,0,0-.509,1.935v5.724a3.646,3.646,0,0,0,.509,1.935,2.054,2.054,0,0,0,1.7,1.046H63.953a2.054,2.054,0,0,0,1.7-1.046,3.646,3.646,0,0,0,.509-1.935V67.438a3.646,3.646,0,0,0-.509-1.935,2.054,2.054,0,0,0-1.7-1.046h-2.1a22.977,22.977,0,0,1,.074-3.815,3.737,3.737,0,0,1,.524-1.409,16.144,16.144,0,0,0,1.175-3.269c.573-2.12.643-6.385.652-10.337s-.1-7.453-.1-7.453a4.27,4.27,0,0,0-4.309-4.411,4.207,4.207,0,0,0-2.824,1.1,4.246,4.246,0,0,0-3.825-2.53,4.1,4.1,0,0,0-2.781,1.1,4.241,4.241,0,0,0-3.816-2.513,4.066,4.066,0,0,0-2.339.742V19.49a4.536,4.536,0,0,0-4.626-4.418Zm0,1.923a2.581,2.581,0,0,1,2.7,2.5V40.413a.962.962,0,1,0,1.923,0V35.407a2.349,2.349,0,1,1,4.677,0v1.252q0,.041,0,.081c0,.029,0,.057,0,.086v4.982a.962.962,0,1,0,1.923,0V36.825a2.349,2.349,0,1,1,4.677,0v1.309q0,.021,0,.042c0,.009,0,.018,0,.027v4.9a.962.962,0,1,0,1.923,0V38.2a2.43,2.43,0,0,1,2.387-2.518,2.355,2.355,0,0,1,2.39,2.434.961.961,0,0,0,0,.114s.111,3.476.1,7.39a59.571,59.571,0,0,1-.584,9.839,13.624,13.624,0,0,1-1.035,2.9,6.149,6.149,0,0,0-.7,1.935,20.68,20.68,0,0,0-.126,4.159H36.847V61.5q0-.028,0-.056s-.01-.186-.036-.413a3.091,3.091,0,0,0-.168-.805,2.371,2.371,0,0,0-.32-.584c-.1-.147-.188-.261-.188-.261l-.009-.011L22.64,42.272a3.27,3.27,0,0,1-.726-1.677,1.582,1.582,0,0,1,.446-1.324l.434-.455a2.031,2.031,0,0,1,2.9.038l8.63,8.2a1.778,1.778,0,0,0,.159.243,1.491,1.491,0,0,0,1.224.587,1.207,1.207,0,0,0,.766-.35,1.38,1.38,0,0,0,.288-.437,2.646,2.646,0,0,0,.189-.69,5.884,5.884,0,0,0,.071-.79q0-.011,0-.021l-.077-26.109a2.576,2.576,0,0,1,2.7-2.492ZM32.677,66.38H63.953c-.071,0-.043-.043.068.135a1.877,1.877,0,0,1,.221.922v5.724a1.877,1.877,0,0,1-.221.922c-.11.178-.138.135-.068.135H32.677c.071,0,.044.043-.066-.135a1.876,1.876,0,0,1-.222-.922V67.437a1.875,1.875,0,0,1,.222-.922c.11-.178.137-.135.066-.135Z" transform="translate(0)" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                        <div className="content-part">
                            <p className="text-2xl xl:pl-24 pt-3 font-semibold px-24">Easy To Use</p>
                            <p className="xl:pl-3 xl:w-auto lg:pl-3 lg:w-auto text-gray-600 pt-4 w-full px-8 pb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis quam sit libero quod architecto error voluptates dignissimos, amet in provident nulla cumque officiis soluta, adipisci inventore repudiandae nesciunt quo!
                            </p>
                        </div>
                    </div>

                    <div className="xl:w-1/4 xl:ml-24 md:ml-4 w-full md:w-full">
                        <div className="icon-part rounded-full xl:ml-16 w-48 h-48 p-16 pl-14 green-bg mx-20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="75.736" height="75.736" viewBox="0 0 78.736 78.736">
                                <g id="Group_2" data-name="Group 2" transform="translate(-2.5 -2.5)">
                                    <path id="Path_9" data-name="Path 9" d="M50.142,41.841h-.663V29.492h.663a6.1,6.1,0,0,1,5.884,4.558,2.362,2.362,0,1,0,4.558-1.243,10.746,10.746,0,0,0-10.443-7.956h-.663v-6.63a2.321,2.321,0,1,0-4.641,0v6.63h-.663A10.785,10.785,0,0,0,36.549,28,10.585,10.585,0,0,0,33.4,35.625,10.9,10.9,0,0,0,44.257,46.483h.663V58.749h-.663a6.142,6.142,0,0,1-5.884-4.393,2.4,2.4,0,0,0-2.321-1.906,2.317,2.317,0,0,0-2.321,2.321,1.825,1.825,0,0,0,.083.663A10.818,10.818,0,0,0,44.257,63.39h.663v6.63a2.321,2.321,0,1,0,4.641,0V63.39h.663A10.9,10.9,0,0,0,61.082,52.533a10.785,10.785,0,0,0-3.149-7.625A11.4,11.4,0,0,0,50.142,41.841Zm-5.967,0a6.133,6.133,0,0,1-.083-12.266h.663V41.841h-.58Zm5.967,16.99h-.663V46.483h.663a6.019,6.019,0,0,1,4.31,1.823,5.942,5.942,0,0,1,1.74,4.31A6.068,6.068,0,0,1,50.142,58.832Z" transform="translate(-5.29 -2.294)" fill="#fff" />
                                    <path id="Path_10" data-name="Path 10" d="M41.868,2.5A39.368,39.368,0,1,0,81.236,41.868,39.4,39.4,0,0,0,41.868,2.5ZM7.224,41.868a34.385,34.385,0,0,1,8.619-22.792l5.884,5.884a2.245,2.245,0,0,0,1.658.663,2.632,2.632,0,0,0,1.658-.663,2.351,2.351,0,0,0,0-3.315l-5.884-5.884A34.589,34.589,0,0,1,76.594,41.785a34.385,34.385,0,0,1-8.619,22.792L62.09,58.692a2.344,2.344,0,0,0-3.315,3.315l5.884,5.884A34.589,34.589,0,0,1,7.224,41.868Z" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                        <div className="content-part"> 
                            <p className="text-2xl xl:pl-24 pt-3 font-semibold px-24">Free To Use</p>
                            <p className="xl:pl-3 xl:w-auto lg:pl-3 lg:w-auto text-gray-600 pt-4 w-full px-8 pb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis quam sit libero quod architecto error voluptates dignissimos, amet in provident nulla cumque officiis soluta, adipisci inventore repudiandae nesciunt quo!
                            </p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 xl:ml-24 w-full md:w-full md:left-0">
                        <div className="icon-part rounded-full xl:ml-16 w-48 h-48 p-16 blue-bg mx-20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57.701" height="72.132" viewBox="0 0 57.701 72.132">
                                <g id="noun_fast_3547886" transform="translate(-26.008 -20.005)">
                                    <path id="Path_11" data-name="Path 11" d="M59.458,20.348a7.214,7.214,0,0,0-8.067,2.681L27.345,56.693a7.214,7.214,0,0,0,5.867,11.4H45.235V84.923a7.214,7.214,0,0,0,13.081,4.2L82.362,55.455A7.214,7.214,0,0,0,76.5,44.045H64.472V27.213A7.214,7.214,0,0,0,59.458,20.348ZM76.5,51.259,52.449,84.923V60.877H33.212L57.258,27.213V51.259Z" transform="translate(0 0)" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                        <div className="content-part">
                            <p className="text-2xl xl:pl-24 pt-3 font-semibold px-24">Fast To Use</p>
                            <p className="xl:pl-3 xl:w-auto lg:pl-3 lg:w-auto text-gray-600 pt-4 w-full px-8 pb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis quam sit libero quod architecto error voluptates dignissimos, amet in provident nulla cumque officiis soluta, adipisci inventore repudiandae nesciunt quo!
                            </p>
                        </div>
                    </div>
                </div>
                {/* END FEATURES SSSION FOR WEB-SITE */}

                {/* HOW IT WORKS */}
                <div id="how-it-works" className="xl:w-full xl:flex xl:mt-48 xl:mb-12 lg:w-full lg:flex lg:mt-48 lg:mb-12 block">
                    <div className="left-div xl:w-1/2 xl:h-auto xl:ml-20 xl:mb-0 rounded-3xl embed-bg h-56 w-3/4 ml-10 mr-10 mb-16">
                    </div>
                    <div className="stepe xl:ml-20">
                        <div className="sign-up xl:flex lg:flex block">
                            <div className="icon-sign xl:ml-0 lg:ml-0 ml-20 p-5 w-20 h-20 embed-blue-bg rounded-full ml-32">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40.625" height="40.625" viewBox="0 0 43.625 43.625">
                                    <g id="noun_account_1575186" transform="translate(-5 -5)">
                                        <g id="Group_3" data-name="Group 3" transform="translate(5 5)">
                                            <path id="Path_14" data-name="Path 14" d="M26.813,5A21.813,21.813,0,1,0,48.625,26.813,21.835,21.835,0,0,0,26.813,5Zm0,2.908a18.916,18.916,0,0,1,13.345,32.31c-2.4-6.835-7.454-11.467-13.345-11.467S15.87,33.383,13.468,40.218A18.916,18.916,0,0,1,26.813,7.908Zm0,4.363a7.271,7.271,0,1,0,7.271,7.271A7.293,7.293,0,0,0,26.813,12.271Zm0,2.908a4.362,4.362,0,1,1-4.363,4.362A4.341,4.341,0,0,1,26.813,15.179Zm0,16.481c4.6,0,8.991,3.964,10.937,10.588a18.975,18.975,0,0,1-21.873,0C17.822,35.624,22.213,31.66,26.813,31.66Z" transform="translate(-5 -5)" fill="#1c74fc"/>
                                        </g>
                                    </g>
                                </svg>

                            </div>
                            <div className="description xl:pl-12 lg:pl-12">
                                <p className="text-1xl xl:pl-0 xl:pt-0 lg:pl-0 lg:pt-0 font-semibold pl-32 pt-4">Sign Up</p>
                                <p className="text-gray-600 xl:w-64 xl:pl-0 lg:w-64 lg:pl-0 pt-2 w-full px-12">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                                </p>
                            </div>
                        </div>
                        <div className="write-book pt-16 xl:flex lg:flex block">
                            <div className="pen-icon xl:ml-0 lg:ml-0 ml-20 p-5 w-20 h-20 bg-red-less rounded-full ml-32">
                                <svg id="edit-line" xmlns="http://www.w3.org/2000/svg" width="35.5" height="35.5" viewBox="0 0 41.5 41.5">
                                    <path id="Path_15" data-name="Path 15" d="M0,0H41.5V41.5H0Z" fill="none"/>
                                    <path id="Path_16" data-name="Path 16" d="M8.9,26.187,26.441,8.65,24,6.2,6.458,23.742v2.445Zm1.433,3.458H3V22.309L22.773,2.535a1.729,1.729,0,0,1,2.445,0L30.11,7.427a1.729,1.729,0,0,1,0,2.445ZM3,33.1H34.125v3.458H3Z" transform="translate(2.188 1.48)" fill="#ff4141"/>
                                </svg>

                            </div>
                            <div className="description xl:pl-12">
                                <p className="text-1xl xl:pl-0 xl:pt-0 lg:pl-0 lg:pt-0 font-semibold pl-32 pt-4">Write Your Book</p>
                                <p className="text-gray-600 xl:w-64 xl:pl-0 lg:w-64 lg:pl-0 pt-2 w-full px-12">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                                </p>
                            </div>
                        </div>
                        <div className="share-book xl:flex lg:flex block pt-16">
                            <div className="shre-icon xl:ml-0 lg:ml-0 ml-20 p-5 w-20 h-20 bg-green-less rounded-full ml-32">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40.643" height="34.642" viewBox="0 0 48.643 42.642">
                                    <g id="noun_Share_3578502" transform="translate(-14.976 -19.051)">
                                        <path id="Path_13" data-name="Path 13" d="M41.774,58.146a1.841,1.841,0,0,0,1.989-.337L63.029,39.937a1.841,1.841,0,0,0-.007-2.707L43.756,19.536a1.841,1.841,0,0,0-3.087,1.357v8.821c-9.782.368-14.7,4.106-15.468,4.746a24.943,24.943,0,0,0-9.978,23.59c0,.029.009.057.015.086l.387,2.055a1.841,1.841,0,0,0,3.354.663l1.161-1.786C27.284,48.1,36.383,47.086,40.669,47.31v9.149a1.841,1.841,0,0,0,1.1,1.687ZM18.652,54.79A21.335,21.335,0,0,1,27.46,37.368c.032-.024.083-.067.113-.094s4.6-3.9,14.648-3.9H42.5a1.841,1.841,0,0,0,1.855-1.841V25.084l14.71,13.509L44.352,52.239V45.646a1.841,1.841,0,0,0-1.57-1.821C39.329,43.31,27.841,42.7,18.652,54.79Z" fill="#37ff80"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="description xl:pl-12">
                                <p className="text-1xl xl:pl-0 xl:pt-0 lg:text-1xl lg:pl-0 lg:pt-0 font-semibold pl-32 pt-4">Share Your Book</p>
                                <p className="text-gray-600 xl:w-64 xl:pl-0 lg:w-64 lg:pl-0 pt-2 w-full px-12">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END HOW IT WORKS */}

                {/* FOOTER COM[PONENT */}
                <Footer />
                {/* END FOOTER */}
            </div>
        )
    }
}

export default Webpage
