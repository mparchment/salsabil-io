import React from "react";

export default function Navbar() {
  return (
    <nav className="font-medium border-b font-libre text-secondary">
      <ul className="flex justify-center text-sm">
        <li>
          <a href="/" className="inline-block px-4 py-3 hover:bg-primary-dark">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="inline-block px-4 py-3 hover:bg-primary-dark">
            Resources
          </a>
        </li>
        <li>
          <a href="/archive" className="inline-block px-4 py-3 hover:bg-primary-dark">
            Archive
          </a>
        </li>
        <li>
          <a href="#" className="inline-block px-4 py-3 hover:bg-primary-dark">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
