import React from "react";
import "./Header.css";
import { Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="nav-bar">
        <Col>
          <Link to="/melobit">
            <div className="nav-logo">
              <div className="navlogo-image">
                <img src="/melobit/images/logo.png" alt="" />
              </div>
              <div className="navlogo-title">
                <h6 className="navlogo-title">melobit</h6>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={8}>
          <div className="nav-list">
            <ul className="nav-list-ul">
              {/* active class for blue border bottom */}
              <li className="navlist-item">
                <NavLink
                  className={(link) =>
                    link.isActive ? "navlist-link actived-link" : "navlist-link"
                  }
                  to="/melobit"
                  end
                >
                  HOME
                </NavLink>
              </li>
              <li className="navlist-item">
                <NavLink
                  className={(link) =>
                    link.isActive ? "navlist-link actived-link" : "navlist-link"
                  }
                  to="/melobit/favorites"
                >
                  FAVORITE SONGS
                </NavLink>
              </li>
              <li className="navlist-item">
                <NavLink
                  className={(link) =>
                    link.isActive ? "navlist-link actived-link" : "navlist-link"
                  }
                  to="/melobit/playlist"
                >
                  PLAYLIST
                </NavLink>
              </li>
              <li className="navlist-item">
                <NavLink
                  className={(link) =>
                    link.isActive ? "navlist-link actived-link" : "navlist-link"
                  }
                  to="/melobit/history"
                >
                  HISTORY
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <Link className="nav-search" to="search">
            <AiOutlineSearch className="nav-search-icon" />
          </Link>
        </Col>
      </div>
    </header>
  );
}
