import React from "react";
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

const Navbar: React.FC = () => {
  return (
    <nav className="w-full">
      <div className="navbar w-full bg-black pt-3">
        <div className="navbar-start gap-2">
          {/* <div className="btn btn-ghost btn-circle">
            <FaEllipsisH className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
          </div> */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaEllipsisH className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box mt-3 ml-2 w-52 p-2 shadow"
            >
              <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group">
                <div className="flex justify-between">
                  <div>File</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Submenu */}
                <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-48 p-2">
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div>New Playlist</div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div>New Playlist Folder</div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg p-0">
                    <div>Private Session</div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div>Logout</div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div>Exit</div>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group">
                <div className="flex justify-between">
                  <div>Edit</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Submenu */}
                <ul className="menu z-10 menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-48 p-2">
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Undo</div>
                      <div>Ctrl+Z</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Redo</div>
                      <div>Ctrl+Y</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Cut</div>
                      <div>Ctrl+X</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Copy</div>
                      <div>Ctrl+C</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Paste</div>
                      <div>Ctrl+V</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Delete</div>
                      <div>Ctrl+Z</div>
                    </div>
                  </li>

                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHover hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Select All</div>
                      <div>Ctrl+A</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHover hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Search</div>
                      <div>Ctrl+L</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHover hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Filter</div>
                      <div>Ctrl+F</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHover hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Preferences...</div>
                      <div>Ctrl+P</div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group">
                <div className="flex justify-between">
                  <div>View</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Submenu */}
                <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box w-48 p-2">
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Zoom In</div>
                      <div>Ctrl+=</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Zoom Out</div>
                      <div>Ctrl+-</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Reset Zoom</div>
                      <div>Ctrl+0</div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group">
                <div className="flex justify-between">
                  <div>Playback</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Submenu */}
                <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-72 p-2">
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Play</div>
                      <div>Space</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Next</div>
                      <div>Ctrl+Right Arrow</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Previous</div>
                      <div>Ctrl+Left Arrow</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Seek Forward</div>
                      <div>Shift+Right Arrow</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Seek Backward</div>
                      <div>Shift+Left Arrow</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Shuffle</div>
                      <div>Ctrl+S</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Repeat</div>
                      <div>Ctrl+R</div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Volume Up</div>
                      <div>Ctrl+Up Arrow</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Volume Down</div>
                      <div>Ctrl+Down Arrow</div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative group">
                <div className="flex justify-between">
                  <div>Help</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Submenu */}
                <ul className="menu menu-sm absolute -top-[10px] left-[12rem] shadow-left ml-1 hidden group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-48 p-2">
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Spotify Help</div>
                      <div>F1</div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Spotify Community</div>
                      <div></div>
                    </div>
                  </li>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Your Account</div>
                      <div></div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>Third-party Software</div>
                      <div></div>
                    </div>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg relative custom-group">
                    <div className="flex justify-between">
                      <div>Troubleshooting</div>
                      <div>
                        <FaAngleRight />
                      </div>
                    </div>
                    {/* Submenu for Troubleshooting */}
                    <ul className="menu menu-sm absolute -top-2 left-[11rem] shadow-left ml-1 hidden custom-group-hover:block border-customBgListMenu border-[1px] bg-customBgListMenu text-customTextColor rounded-box min-w-96 p-2">
                      <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                        <div className="flex justify-between">
                          <div>Disable Hardware Acceleration and Restart</div>
                          <div></div>
                        </div>
                      </li>
                      <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                        <div className="flex justify-between">
                          <div>Reload</div>
                          <div>Ctrl+Shift+R</div>
                        </div>
                      </li>
                      <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                        <div className="flex justify-between">
                          <div>Reset App Data and Restart</div>
                          <div></div>
                        </div>
                      </li>
                      <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                        <div className="flex justify-between">
                          <div>Show Logs In Explorer</div>
                          <div></div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <div className="divider mt-4 border-t-2 border-customTextColor m-0 p-0"></div>
                  <li className="hover:bg-customBgHoverListMenu hover:rounded-lg">
                    <div className="flex justify-between">
                      <div>About Spotify</div>
                      <div></div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost hover:bg-transparent p-2">
            <FaChevronLeft className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
          </div>
          <div className="btn btn-ghost hover:bg-transparent p-2 ">
            <FaChevronRight className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
          </div>
        </div>
        <div className="navbar-center">
          <div className="btn btn-ghost btn-circle mr-4 bg-customBgHover hover:bg-customBgHover">
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
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-end">
          <div className="badge bg-white border-white p-4 hover:cursor-pointer badge-active text-black font-sans font-semibold mr-4">
            Explore Premium
          </div>
          <div className="btn btn-ghost hover:bg-transparent">
            <FaBell className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
          </div>
          <div className="btn btn-ghost hover:bg-transparent">
            <FaUsers className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
          </div>
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent"
            >
              <FaEllipsisH className="w-5 h-5 text-customTextHover hover:text-customTextColor" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-customTextColor border-2 bg-customBgList text-customTextColor rounded-box mt-3 ml-2 w-52 p-2 shadow"
            >
              <li className="hover:bg-customBgHover hover:rounded-lg">
                <a>File</a>
              </li>
              <li className="hover:bg-customBgHover hover:rounded-lg">
                <a>Edit</a>
              </li>
              <li className="hover:bg-customBgHover hover:rounded-lg">
                <a>View</a>
              </li>
              <li className="hover:bg-customBgHover hover:rounded-lg">
                <a>Playback</a>
              </li>
              <li className="hover:bg-customBgHover hover:rounded-lg">
                <a>Help</a>
              </li>
            </ul>
          </div> */}

          <div className="btn btn-ghost hover:bg-transparent">
            <div className="avatar">
              <div className="ring ring-gray-700 w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
