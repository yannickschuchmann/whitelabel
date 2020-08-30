import React, { useState } from "react";

const Navigation = ({ links }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  const onJump = (target) => (e) => {
    e.preventDefault();
    const targetEl = document.querySelector(target);
    targetEl && targetEl.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = links.map(({ text, url, target }) => (
    <a
      key={text}
      className="navbar-item"
      onClick={target && onJump(target)}
      href={url}
    >
      {text}
    </a>
  ));

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
          <div className="navbar-end">{navItems}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
