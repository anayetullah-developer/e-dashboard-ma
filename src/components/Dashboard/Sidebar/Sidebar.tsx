"use client";
import React, { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className="sidebar h-screen overflow-hidden w-sidebarWidth shrink-0 bg-primary-dark">
      <div className="custom_scrollbar h-full overflow-y-auto">
        <div className="p-3 bg-inherit">
          {/* ==== Logo ==== */}
          <div className="logo_area flex items-center justify-center w-auto h-14 overflow-hidden">
            <Image
              width={200}
              height={80}
              className="w-full h-full object-contain"
              src="/assets/images/demo-logo.png"
              alt="site_logo"
            />
          </div>
        </div>
        {/* === Links ==== */}
        <nav className="mt-6">
          <ul className="flex flex-col">
            <li>
              <span className="dashboard_sidebar_link dashboard_sidebar_link_active">
                Dashboard
              </span>
            </li>
            <li>
              <h3
                aria-label="Dashboard links category"
                className="px-6 pt-6 pb-2 text-white text-opacity-90 text-xs font-medium"
              >
                User
              </h3>
              <span className="dashboard_sidebar_link">Profile</span>
            </li>
            <li>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`dashboard_sidebar_link ${
                  isDropdownOpen ? "dashboard_sidebar_link_active" : ""
                }`}
              >
                Settings
              </div>
              <div
                className={`dashboard_sidebar_dropdown ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="px-10 pt-1 pb-4">
                  <ul>
                    <li className="text-white/80 cursor-pointer hover:text-white text-sm px-2 py-1">
                      Dropdonw item 1
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 2
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 3
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 4
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 5
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 6
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 7
                    </li>
                    <li className="text-white/80 cursor-pointer  hover:text-white text-sm px-2 py-1">
                      Dropdonw item 8
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <h3
                aria-label="Dashboard links category"
                className="px-6 pt-6 pb-2 text-white text-opacity-90 text-xs font-medium"
              >
                Shop
              </h3>
              <span className="dashboard_sidebar_link">Invoice</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Products</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Order</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Reports</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Agents</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Customers</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Settings</span>
            </li>
            <li>
              <span className="dashboard_sidebar_link">Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
