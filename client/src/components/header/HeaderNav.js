import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import location from "../../assets/images/location.png";
import search from "../../assets/images/search.png";

const HeaderNav = (props) => {


    const {authenticated, authenticatedUser} = props.auth

    return (
        <nav className={'header__nav'}>
            <div
                className={`header__nav-inner-container ${authenticated && 'header__nav-inner-container--authenticated'} container`}>
                <Link to={'/'}><h3 className={'header__logo'}>trad'r</h3></Link>

                <form action="" className={`header__nav-search-form flex`}>
                    <div
                        className={`header__search-input-wrapper ${props.searchToggle ? "hidden" : undefined}`}>
                        <input className={'header__search-input'} type="text" placeholder={"Search"}
                               onClick={props.browserWidth < 767 && !props.searchToggle ? props.toggleSearchMenu : undefined}/>
                        <img src={search} alt="" className={"header__search-image"}/>
                    </div>
                    <div className={`header__location-input-wrapper`}>
                        <input className={'header__location-input'} type="text" placeholder={"Location"}/>
                        <img className={'header__location-image'} src={location} alt=""/>
                        <button
                            className={`header__search-submit`}>Search
                        </button>
                    </div>

                </form>

                <div className={`header__auth-navigation`}>
                    {!authenticated && (
                        <ul className={'header__logged-out'}>
                            <>
                                <li className={`header__logged-out-signup`} onClick={props.toggleSignup}>
                                    {/*    /!*    /!*todo -- if authenticated is true Sign up is hidden and log in becomes log out; An avatar  is then placed to the right of the page which will be a link to the dashboard*!/*!/*/}
                                    <i className="header__logged-out-icon material-icons">person_add</i>
                                    <p className={'header__logged-out-link'}>Sign up</p>
                                </li>
                                <li className={`header__logged-out-login`} onClick={props.toggleLogin}>
                                    <i className="header__logged-out-icon material-icons">person</i>
                                    <p className={'header__logged-out-link'}>Log in</p>
                                </li>
                            </>
                        </ul>
                    )}


                    {/*  todo - display only if the user is logged in*/}
                    {
                        authenticated && (
                            <ul className="header__logged-in">
                                <li className={'header__logged-in-item'}>
                                    <i className="header__logged-in-icon material-icons">home</i>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li className={'header__logged-in-item'}>
                                    <i className="header__logged-in-icon material-icons">notifications</i>
                                    Notifications
                                </li>
                                <li className={'header__logged-in-item'}>
                                    <i className="header__logged-in-icon material-icons">chat</i>
                                    Messages
                                </li>
                                <li className={'header__logged-in-item'}>
                                    <i className="header__logged-in-icon material-icons">add_box</i>
                                    List An Item
                                </li>
                                <li className={'header__logged-in-item'}>
                                    <i className="header__logged-in-icon material-icons">apps</i>
                                    My Listings
                                </li>
                                <li className={'header__logged-in-item'}>{authenticated && (
                                    <div className={"header__logged-in-avatar-wrapper"}>
                                        <img src={authenticatedUser.imageUrl} alt="" className={'header__logged-in-avatar-image'}/>
                                    </div>)}
                                </li>
                            </ul>
                        )
                    }
                </div>

                <i className={`material-icons ${props.browserWidth > 1023 && "hidden"} header__hamburger`}
                   onClick={props.toggleNavMenu}>menu</i>
            </div>


        </nav>

    )

}

const mapStateToProps = state =>({
    auth: state.auth,
    listingData: state.listingData
})

export default connect(mapStateToProps)(HeaderNav);