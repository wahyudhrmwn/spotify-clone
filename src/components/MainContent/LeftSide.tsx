"use client";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setExpandedLeft } from "@/store/expandedLeft";
import { RootState } from "@/store";
import {
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlinePlus,
} from "react-icons/ai";

// Import JSON
import leftMenu from "/public/json/listPlaylist.json";
import { setSelectedDetail } from "@/store/selectedDetailSlice";
// import { setToastMessage } from "@/store/toastMessage";
import { setDetailPlaylist } from "@/store/detailPlaylistId";
import { resetPlaylist, setError, setPlaylist } from "@/store/playlistSlice";
import axios from "axios";

const LeftSide: React.FC = () => {
  const dispatch = useDispatch();
  const [menuType, setMenuType] = useState<string>("");
  const [menuId, setMenuId] = useState<string>("");

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const expanded = useSelector((state: RootState) => state.expandedLeft.expand);

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const currentMenu = useSelector(
    (state: RootState) => state.selectedDetail.currentMenu
  );

  const toggleExpand = () => {
    // setExpanded(!expanded);
    dispatch(setExpandedLeft(!expanded)); // Update Redux state
  };

  const handleMenuClick = (menuId: string, menuType: string) => {
    if (currentMenu !== menuId) {
      dispatch(resetPlaylist());
      setMenuId(menuId);
      setMenuType(menuType);
      dispatch(setSelectedDetail(menuId)); // Update Redux state
      dispatch(setDetailPlaylist(parseInt(menuId)));
    }
  };

  // Effect to fetch playlist data based on the selected menuId and menuType
  useEffect(() => {
    if (menuId && menuType) {
      axios
        .get("/json/dataMusic.json")
        .then((response) => {
          const playlists = response.data.playlists[menuType]; // Use the flag dynamically (menuType in this case)

          // Filter by the menuId
          const selectedPlaylist = playlists.find(
            (playlist: { playlistId: number }) =>
              playlist.playlistId === parseInt(menuId)
          );

          console.log("selectedPlaylist", selectedPlaylist);

          setTimeout(() => {
            if (selectedPlaylist) {
              dispatch(setPlaylist(selectedPlaylist));
            } else {
              dispatch(setError("Playlist not found"));
            }
          }, 1500); // Tunggu 5 detik sebelum mengubah state
        })
        .catch((err) => {
          dispatch(setError("Failed to load playlists"));
          console.error(err);
        });
    }
  }, [dispatch, menuId, menuType]);

  return (
    <div
      className={`h-full flex-initial wrapper-left-side ${
        expanded ? "w-[22rem]" : "w-[6.2rem]"
      } p-1`}
    >
      <div
        className={`h-[36.1rem] ${
          expanded
            ? "w-[21.5rem] justify-items-start"
            : "w-[5.7rem] text-center"
        } overflow-y-auto text-customTextColor bg-customBgList mt-[4.1rem] rounded-t-box rounded-b-box mb-24 no-scrollbar pt-2`}
      >
        <div
          className={`fixed top-[4.5rem] ${
            expanded ? "w-[21.5rem] h-32" : "w-[5.7rem] h-24"
          } bg-customBgColor rounded-t-box  content-center`}
        >
          <div
            className={`justify-items-center  ${
              expanded ? "justify-between flex items-center" : ""
            }`}
          >
            {expanded ? (
              <>
                <div className="w-full ">
                  <div className="flex justify-between w-full  items-center">
                    <div>
                      <button
                        className={`btn ${
                          expanded ? "h-16" : "w-16 h-16"
                        } btn-ghost text-customTextColor hover:text-customTextHover hover:bg-transparent`}
                        onClick={toggleExpand}
                      >
                        {expanded ? (
                          <>
                            <AiOutlineBook className="w-8 h-8" /> Your Library
                          </>
                        ) : (
                          <AiOutlineBook className="w-8 h-8" />
                        )}
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextHover text-customTextColor"
                        onClick={() => handleMenuClick("Plus Library", "")}
                      >
                        <AiOutlinePlus className="w-5 h-5" />
                      </button>
                      <button
                        className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextHover text-customTextColor"
                        onClick={() => handleMenuClick("Show Right", "")}
                      >
                        <AiOutlineArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className=" px-2 py-2">
                    <div
                      className="badge bg-customBgHover text-customTextColor border-customBgHover p-4 font-sans font-semibold hover:cursor-pointer"
                      onClick={() => handleMenuClick("Playlist", "")}
                    >
                      Playlist
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    className={`btn ${
                      expanded ? "h-16" : "w-16 h-16"
                    } btn-ghost text-customTextColor hover:text-customTextHover hover:bg-transparent`}
                    onClick={toggleExpand}
                  >
                    {expanded ? (
                      <>
                        <AiOutlineBook className="w-8 h-8" /> Your Library
                      </>
                    ) : (
                      <AiOutlineBook className="w-8 h-8" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className={`grid w-full ${
            expanded ? "mt-[7rem]" : "mt-[5rem] gap-2 justify-center"
          } p-1 pb-4 pt-4`}
        >
          {expanded ? (
            <>
              {leftMenu.myPlaylist.map(
                (data: {
                  playlistId: number;
                  url: string;
                  name: string;
                  description: string;
                }) => (
                  <span
                    key={data.playlistId}
                    className="flex items-center p-2 hover:bg-customBgHover hover:cursor-pointer rounded-xl"
                    onClick={() =>
                      handleMenuClick(data.playlistId.toString(), "myPlaylist")
                    }
                  >
                    <button
                      className="btn btn-square w-12 h-12 border-gray-800 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${data.url}')`,
                      }}
                    ></button>
                    <div className="ml-4">
                      <div>{data.name}</div>
                      <div>{data.description}</div>
                    </div>
                  </span>
                )
              )}
            </>
          ) : (
            <>
              {leftMenu.myPlaylist.map(
                (data: {
                  playlistId: number;
                  url: string;
                  name: string;
                  description: string;
                }) => (
                  <span
                    key={data.playlistId}
                    className="flex items-center hover:cursor-pointer rounded-xl"
                    onClick={() =>
                      handleMenuClick(data.playlistId.toString(), "myPlaylist")
                    }
                  >
                    <button
                      className="btn btn-square w-12 h-12 border-gray-800 hover:border-gray-500 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${data.url}')`,
                      }}
                    ></button>
                  </span>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
