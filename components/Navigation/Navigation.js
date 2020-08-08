import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img height="28" src="/logo.png" alt="Logo" />
          </a>
          <a
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={onOpen}
            className={`${open && "is-active"} navbar-burger`}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`${open && "is-active"} navbar-menu`}>
          <div className="navbar-end">
            <a className="navbar-item" href="/vision">
              Vision
            </a>
            <a className="navbar-item" href="/mission">
              Mission
            </a>
            <a className="navbar-item" href="/value-proposition">
              Value Proposition
            </a>
            <a className="navbar-item" href="/free-trial">
              Free Trial
            </a>
            <a className="navbar-item" href="/about-us">
              About us
            </a>
            <a className="navbar-item" href="/deepchange-network">
              deepchange Network
            </a>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
