import React from "react";
import "./Header.css";
import { Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';

export default function Header() {
  return (
    <header>
        <div className="nav-bar">
          <Col>
          <Link to='/Melobit'>
            <div className="nav-logo">
              <div className="navlogo-image">
                <img src="Melobit/images/logo.png" alt="" />
              </div>
              <div className="navlogo-title">
                <h6 className="navlogo-title">Melobit</h6>
              </div>
            </div>
            </Link>
          </Col>
          <Col xs={8}>
            <div className="nav-list">
                <ul className="nav-list-ul">
                  {/* active class for blue border bottom */}
                    <li className="navlist-item"><NavLink className={(link) => link.isActive ? 'navlist-link actived-link' : 'navlist-link'} to='/Melobit'>HOME</NavLink></li>
                    <li className="navlist-item"><NavLink className={(link) => link.isActive ? 'navlist-link actived-link' : 'navlist-link'} to='/Melobit/favorites'>FAVORITE SONGS</NavLink></li>
                    <li className="navlist-item"><NavLink className={(link) => link.isActive ? 'navlist-link actived-link' : 'navlist-link'} to='/Melobit/playlists'>PLAYLIST</NavLink></li>
                    <li className="navlist-item"><NavLink className={(link) => link.isActive ? 'navlist-link actived-link' : 'navlist-link'} to='/Melobit/history'>HISTORY</NavLink></li>
                </ul>
            </div>
          </Col>
          <Col>
                <Link className="nav-search" to='search'><AiOutlineSearch className="nav-search-icon" /></Link>
          </Col>
        </div>
    </header>
  );
}
