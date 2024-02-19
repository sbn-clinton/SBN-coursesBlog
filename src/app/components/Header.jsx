import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-info">
      <div className="container bg-info border-buttom pt-2 text-white mb-2">
        <h1 className="d-block text-center">SBN-cyberTech</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active text-black" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-black" href="/about">
              Abouts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-black" href="/about/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-black" href="/code/repos">
              Code
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
