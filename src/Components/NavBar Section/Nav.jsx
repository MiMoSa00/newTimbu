import React, { useState } from 'react'
import Footer from '../Footer Section/Footer'
import { Link } from 'react-router-dom'
import './Nav.css'

// Imported Icons
import { BiSearchAlt } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { FiFilter } from 'react-icons/fi'
// import { AiOutlineHeart } from 'react-icons/ai'
// import { IoMenu } from 'react-icons/io5'
// import { BsArrowRightShort } from 'react-icons/bs'
// import { BsQuestionCircle } from 'react-icons/bs'


// Imported Image
import img from '../../assets/TIMBU.png'
import img1 from '../../assets/newimg.png'
// import img0 from '../../assets/general.png'
import img2 from '../../assets/Group.png'
import img3 from '../../assets/img12.png'
import img4 from '../../assets/img8.png'
import img5 from '../../assets/img13.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img9.png'
import img9 from '../../assets/img10.png'
import img10 from '../../assets/img11.png'





const Nav = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">

                    <div className="imgCl">
                        <div className="menu-icon" onClick={toggleMenu}>
                            {isOpen ? '✖️' : '☰'}
                        </div>
                        {isOpen && (
                            <nav className="nav-menu">
                                <ul>
                                    <li><a href="#home">Men</a></li>
                                    <li><a href="#about">Women</a></li>

                                </ul>
                            </nav>
                        )}

                        <img src={img} />
                    </div>
                    <Link to="/men">
                    <button style={{ fontWeight: "600", fontSize: "19px", backgroundColor:"transparent", border:"none" }} className='gender'>Men</button>
                    </Link>
                 
                    <Link to="/women">
                    <button style={{ color: '#8A8A8A', backgroundColor:"transparent", border:"none",fontWeight: "600", fontSize: "19px"  }} className='gender'>Women</button>
                    </Link>
                    
                </div>

                <div className="iconic" style={{ display: "flex", gap: "29px" }}>
                    <div className="searchBar flex" >
                        <BiSearchAlt className="icone" style={{ marginLeft: "10px", fontSize: "20px" }} />
                        <div className="mini" >

                            <input type="text" placeholder='Search for items' />
                        </div>


                    </div>

                    <div className="adminDiv flex">
                        <FiUser className="icon" />
                        <RiShoppingBag3Line className="icon" />

                    </div>
                </div>




            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1 >Discover your Perfect Style With Us</h1>

                    <div className="videoDiv">
                        <img src={img1} className='image' />
                        {/* <img src={img0} className='images'/> */}
                        <div className="Overlay">
                            <img src={img2} className='overlay' />
                        </div>


                    </div>
                </div>

                <div className="topButton" style={{ display: "flex", marginTop: "100px" }}>


                    <div className="buttons flex" style={{ gap: "1rem", justifyContent: "space-between" }}>
                        <button className='btn' style={{ width: "57px", color: "white", backgroundColor: "black" }}>All</button>
                        <button className='btn transparent' style={{ width: "120px" }}>New Arrivals</button>
                        <button className='btn transparent'>Under 5k</button>
                        <button className='btn transparent'>Jeans</button>
                        <button className='btn transparent'>T-Shirts</button>
                        <button className='btn transparent '>Shorts</button>
                        <button className='btn transparent'>Formals</button>
                        <button className='btn transparent'>Hats</button>
                    </div>
                    <button className="newbtn"> <FiFilter /> Filters</button>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <h2>All items</h2>
                        <p>245 items</p>
                    </div>
                    <div className="textDiv">

                        <div className="secContainer">


                            <div className="new">

                                <div className="singleItem">
                                    <div className="iconCase" >
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img3} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)" }} />

                                    <h6>Reclaimed Vintage men loose fit jean in vintage mid blue</h6>
                                    <small>W34 L42</small>
                                    <p>₦4,000</p>
                                </div>


                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img4} alt="Image Name" />

                                    <h6>Plain Grey Unisex Hoodie</h6>
                                    <small>All sizes available</small>
                                    <p>₦8,500</p>
                                </div>


                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img5} alt="Image Name" />
                                    <h6>Reclaimed Vintage men loose fit trousers in plain black</h6>
                                    <small>W34 L42</small>
                                    <p>₦4,500</p>
                                </div>




                                <div className="singleItem">
                                    <div className="iconCase"  >
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img6} alt="Image Name" />

                                    <h6>Men's Short Sleeve Round Neck T-Shirt </h6>
                                    <small>All sizes available</small>
                                    <p>₦6,000</p>
                                </div>

                            </div>

                            <div className="old">

                                <div className="singleItem" >
                                    <div className="iconCase" style={{bottom:"16.3rem" , width:"56px", height:"56px", backgroundColor:"white", opacity:"0.7"}}>
                                        <RiShoppingBag3Line className="icon" style={{ marginBottom: "4.4rem" }} />
                                    </div>                                <img src={img7} alt="Image Name" />
                                    <h6>Dark Grey Summer Short And Beach Wear</h6>
                                    <small>All sizes available</small>
                                    <p>₦5,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase"  style={{bottom:"15.5rem" , width:"56px", height:"56px", backgroundColor:"white", opacity:"0.7"}}>
                                        <RiShoppingBag3Line className="icon" style={{ marginBottom: "3.8rem" }} />
                                    </div>                                <img src={img8} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230", paddingBottom: "9rem" }} />
                                    <h6>Osc Signature MENS Quality  R-Neck V-Neck T-Shirts Long Sleeve</h6>
                                    <small>All sizes available</small>
                                    <p>₦6,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>
                                    <img src={img9} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)", paddingBottom: "7rem" }} />
                                    <h6>Men's Corporate Suit - Brown Carton Colour</h6>
                                    <small>All sizes available</small>
                                    <p>₦42,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>

                                    <img src={img10} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)", paddingBottom: "7rem" }} />
                                    <h6>Sky Stock Blue Jean For Men</h6>
                                    <small>W34 L42</small>
                                    <p>₦14,500</p>
                                </div>

                            </div>




                        </div>

                        <div className="laster">
                            <p>You’ve viewed 70 of 254 products</p>
                            <button style={{ width: "186px", height: "44px", border: "1px solid black", backgroundColor: "transparent", fontSize: "16px", fontWeight: "600" }}>Load more</button>
                        </div>





                    </div>



                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Nav