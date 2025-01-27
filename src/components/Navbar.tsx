"use client";

import React, { useState } from "react";
import {
  FaAngleRight,
  FaBell,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaHome,
  FaSearch,
  FaSpotify,
  FaUsers,
} from "react-icons/fa";

import Image from "next/image";

// Example JSON data menuFile
const menuFile = {
  menu: [
    {
      title: "File",
      submenu: [
        { title: "New Playlist", shorcut: "Ctrl+N" },
        { title: "New Playlist Folder", shorcut: "Ctrl+Shift+N" },
        { divider: true },
        { title: "Private Session" },
        { divider: true },
        { title: "Logout", shorcut: "Ctrl+Shift+W" },
        { divider: true },
        { title: "Exit", shorcut: "Ctrl+Shift+Q" },
      ],
    },
  ],
};

const menuEdit = {
  menu: [
    {
      title: "Edit",
      submenu: [
        { title: "Undo", shortcut: "Ctrl+Z" },
        { title: "Redo", shortcut: "Ctrl+Y" },
        { divider: true },
        { title: "Cut", shortcut: "Ctrl+X" },
        { title: "Copy", shortcut: "Ctrl+C" },
        { title: "Paste", shortcut: "Ctrl+V" },
        { title: "Delete", shortcut: "Ctrl+Z" },
        { divider: true },
        { title: "Select All", shortcut: "Ctrl+A" },
        { divider: true },
        { title: "Search", shortcut: "Ctrl+L" },
        { title: "Filter", shortcut: "Ctrl+F" },
        { divider: true },
        { title: "Preferences...", shortcut: "Ctrl+P" },
      ],
    },
  ],
};

const menuView = {
  menu: [
    {
      title: "View",
      submenu: [
        { title: "Zoom In", shortcut: "Ctrl+=" },
        { title: "Zoom Out", shortcut: "Ctrl+-" },
        { title: "Reset Zoom", shortcut: "Ctrl+0" },
      ],
    },
  ],
};

const menuPlayback = {
  menu: [
    {
      title: "Playback",
      submenu: [
        { title: "Play", shortcut: "Space" },
        { divider: true },
        { title: "Next", shortcut: "Ctrl+Right Arrow" },
        { title: "Previous", shortcut: "Ctrl+Left Arrow" },
        { title: "Seek Forward", shortcut: "Shift+Right Arrow" },
        { title: "Seek Backward", shortcut: "Shift+Left Arrow" },
        { divider: true },
        { title: "Shuffle", shortcut: "Ctrl+S" },
        { title: "Repeat", shortcut: "Ctrl+R" },
        { divider: true },
        { title: "Volume Up", shortcut: "Ctrl+Up Arrow" },
        { title: "Volume Down", shortcut: "Ctrl+Down Arrow" },
      ],
    },
  ],
};

const menuHelp = {
  menu: [
    {
      title: "Help",
      submenu: [
        { title: "Spotify Help", shortcut: "F1" },
        { title: "Spotify Community" },
        { title: "Your Account" },
        { divider: true },
        { title: "Third-party Software" },
        { divider: true },
        {
          title: "Troubleshooting",
          submenu: [
            { title: "Disable Hardware Acceleration and Restart" },
            { title: "Reload", shortcut: "Ctrl+Shift+R" },
            { title: "Reset App Data and Restart" },
            { title: "Show Logs In Explorer" },
          ],
        },
        { divider: true },
        { title: "About Spotify" },
      ],
    },
  ],
};

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; // Pastikan RootState sesuai dengan struktur Redux Anda
import { undoMenu, redoMenu } from "../store/selectedDetailSlice";


const Navbar: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleMenuClick = (menuTitle: string) => {
    setToastMessage(`You clicked on: ${menuTitle}`);
    // Menyembunyikan toast setelah 3 detik
    setTimeout(() => setToastMessage(null), 3000);
  };
  
  // Menggunakan useSelector untuk memantau perubahan pada menuHistory dan futureMenus
  const menuHistory = useSelector((state: RootState) => state.selectedDetail.menuHistory);
  const futureMenus = useSelector((state: RootState) => state.selectedDetail.futureMenus);
  
  const handleMenuUndo = () => {
    dispatch(undoMenu()); // Menjalankan undo
  };

  const handleMenuRedo = () => {
    dispatch(redoMenu()); // Menjalankan redo
  };

  return (
    <nav className="w-full">
      {toastMessage && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <div className="navbar w-full bg-black pt-3">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaEllipsisH className="w-5 h-5 text-customTextColor hover:text-customTextHover" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box mt-3 ml-2 w-52 p-2 shadow"
            >
              {menuFile.menu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group"
                >
                  <div
                    className="flex justify-between"
                    onClick={() => handleMenuClick(menu.title ?? "Unknown")}
                  >
                    <div>{menu.title}</div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                  {/* Submenu */}
                  <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-72 p-2">
                    {menu.submenu.map((item, subIndex) => (
                      <>
                        {item.divider ? (
                          <div
                            key={subIndex}
                            className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"
                          ></div>
                        ) : (
                          <li
                            key={subIndex}
                            className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                            onClick={() =>
                              handleMenuClick(item.title ?? "Unknown")
                            }
                          >
                            <div className="flex justify-between">
                              <div>{item.title}</div>
                              <div>{item.shorcut}</div>
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
              {menuEdit.menu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group"
                >
                  <div
                    className="flex justify-between"
                    onClick={() => handleMenuClick(menu.title ?? "Unknown")}
                  >
                    <div>{menu.title}</div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                  {/* Submenu */}
                  <ul className="menu z-10 menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-48 p-2">
                    {menu.submenu.map((item, subIndex) => (
                      <>
                        {item.divider ? (
                          <div
                            key={subIndex}
                            className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"
                          ></div>
                        ) : (
                          <li
                            key={subIndex}
                            className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                            onClick={() =>
                              handleMenuClick(item.title ?? "Unknown")
                            }
                          >
                            <div className="flex justify-between">
                              <div>{item.title}</div>
                              <div>{item.shortcut}</div>
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
              {menuView.menu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group"
                >
                  <div
                    className="flex justify-between"
                    onClick={() => handleMenuClick(menu.title ?? "Unknown")}
                  >
                    <div>{menu.title}</div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                  {/* Submenu */}
                  <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-48 p-2">
                    {menu.submenu.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                        onClick={() => handleMenuClick(item.title ?? "Unknown")}
                      >
                        <div className="flex justify-between">
                          <div>{item.title}</div>
                          <div>{item.shortcut}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {menuPlayback.menu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group"
                >
                  <div
                    className="flex justify-between"
                    onClick={() => handleMenuClick(menu.title ?? "Unknown")}
                  >
                    <div>{menu.title}</div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                  {/* Submenu */}
                  <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-72 p-2">
                    {menu.submenu.map((item, subIndex) => (
                      <>
                        {item.divider ? (
                          <div
                            key={subIndex}
                            className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"
                          ></div>
                        ) : (
                          <li
                            key={subIndex}
                            className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                            onClick={() =>
                              handleMenuClick(item.title ?? "Unknown")
                            }
                          >
                            <div className="flex justify-between">
                              <div>{item.title}</div>
                              <div>{item.shortcut}</div>
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
              {menuHelp.menu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group"
                >
                  <div
                    className="flex justify-between"
                    onClick={() => handleMenuClick(menu.title ?? "Unknown")}
                  >
                    <div>{menu.title}</div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                  {/* Submenu */}
                  <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-48 p-2">
                    {menu.submenu.map((item, subIndex) => (
                      <>
                        {item.divider ? (
                          <div
                            key={subIndex}
                            className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"
                          ></div>
                        ) : item.submenu ? (
                          <>
                            <li
                              key={subIndex}
                              className="hover:bg-customBgHoverListMenu hover:rounded-lg relative custom-group"
                            >
                              <div
                                className="flex justify-between"
                                onClick={() =>
                                  handleMenuClick(item.title ?? "Unknown")
                                }
                              >
                                <div>{item.title}</div>
                                <div>
                                  <FaAngleRight />
                                </div>
                              </div>
                              {/* Submenu for Troubleshooting */}
                              <ul className="menu menu-sm absolute -top-2 left-[11rem] shadow-left ml-1 hidden custom-group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-[30rem] p-2">
                                {item.submenu.map((subItem, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                                    onClick={() =>
                                      handleMenuClick(
                                        subItem.title ?? "Unknown"
                                      )
                                    }
                                  >
                                    <div className="flex justify-between">
                                      <div>{subItem.title}</div>
                                      <div>{subItem.shortcut}</div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </>
                        ) : (
                          <li
                            key={subIndex}
                            className="hover:bg-customBgHoverListMenu hover:rounded-lg"
                            onClick={() =>
                              handleMenuClick(item.title ?? "Unknown")
                            }
                          >
                            <div className="flex justify-between">
                              <div>{item.title}</div>
                              <div>{item.shortcut}</div>
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="btn btn-ghost disabled:bg-transparent bg-transparent hover:bg-transparent p-2"
            onClick={() => handleMenuUndo()}
            disabled={menuHistory.length <= 0}
          >
            <FaChevronLeft
              className={`w-5 h-5 ${
                menuHistory.length <= 0
                  ? "text-gray-700"
                  : "text-customTextColor"
              }  hover:text-customTextHover`}
            />
          </button>
          <button
            className="btn btn-ghost disabled:bg-transparent hover:bg-transparent p-2"
            onClick={() => handleMenuRedo()}
            disabled={futureMenus.length === 0}
          >
            <FaChevronRight
              className={`w-5 h-5 ${
                futureMenus.length === 0
                  ? "text-gray-700"
                  : "text-customTextColor"
              }  hover:text-customTextHover`}
            />
          </button>
        </div>
        <div className="navbar-center">
          <div
            className="btn btn-ghost btn-circle mr-4 bg-customBgHover hover:bg-customBgHover"
            onClick={() => handleMenuClick("Home Icon")}
          >
            <FaHome className="w-5 h-5 text-customTextColor" />
          </div>
          <label className="input input-bordered flex items-center gap-2 rounded-full w-[30rem] bg-customBgHover hover:bg-customBgHover">
            <FaSearch className="w-5 h-5 text-customTextColor" />
            <input
              type="text"
              className="grow border-r-customTextColor border-r-2 text-customTextColor"
              placeholder="What do you want to play?"
            />
            <FaSpotify className="w-5 h-5 text-customTextColor" />
          </label>
        </div>
        <div className="navbar-end">
          <div
            className="badge bg-white border-white p-4 hover:cursor-pointer badge-active text-black font-sans font-semibold mr-4"
            onClick={() => handleMenuClick("Explore Premium")}
          >
            Explore Premium
          </div>
          <div
            className="btn btn-ghost hover:bg-transparent"
            onClick={() => handleMenuClick("Bell Icon")}
          >
            <FaBell className="w-5 h-5 text-customTextColor hover:text-customTextHover" />
          </div>
          <div
            className="btn btn-ghost hover:bg-transparent"
            onClick={() => handleMenuClick("Users Icon")}
          >
            <FaUsers className="w-5 h-5 text-customTextColor hover:text-customTextHover" />
          </div>

          <div
            className="btn btn-ghost hover:bg-transparent"
            onClick={() => handleMenuClick("Avatar Icon")}
          >
            <div className="avatar">
              <div className="ring ring-gray-700 w-10 rounded-full">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Avatar"
                  width={1024}
                  height={1024}
                  className="rounded"
                  placeholder="empty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
