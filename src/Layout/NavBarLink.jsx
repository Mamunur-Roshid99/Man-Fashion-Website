import React from 'react'

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';

const NavBarLink = () => {
  return (
    <section className="hidden lg:block">
      <div className="container w-[90%] lg:w-[1200px] mx-auto flex items-center justify-between">
        {/* Link */}
        <div>
          <ul className="flex items-center gap-10 text-lg">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EB6420] font-bold"
                    : "text-[#0D0D0D] font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EB6420] font-bold"
                    : "text-[#0D0D0D] font-medium"
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EB6420] font-bold"
                    : "text-[#0D0D0D] font-medium"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EB6420] font-bold"
                    : "text-[#0D0D0D] font-medium"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* address */}
        <div className="flex items-center gap-10">
          {/* phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <p>922</p>
          </div>
          {/* address */}
          <div className="flex items-center gap-3">
            <FaLocationDot />
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBarLink
