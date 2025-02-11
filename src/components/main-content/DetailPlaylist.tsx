import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import {
  FaEllipsisH,
  FaListUl,
  FaRegArrowAltCircleDown,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setToastMessage } from "@/store/toastMessage";
import { setSelectedDetail } from "@/store/selectedDetailSlice";

// import listRecommended from "/public/playlistRecommended.json";

const DetailPlaylist: React.FC = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { playlist, error } = useSelector((state: RootState) => state.playlist);

  const handleMenuClick = (menuTitle: string) => {
    dispatch(setToastMessage(`You clicked on: ${menuTitle}`)); // Update Redux state
    dispatch(setSelectedDetail(menuTitle)); // Update Redux state
    setTimeout(() => dispatch(setToastMessage(null)), 3000);
  };

  // Fungsi untuk menutup search bar jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  if (!playlist) {
    return <div className="w-full h-[71vh] content-center text-center"><span className="loading loading-infinity bg-white loading-lg"></span></div>
  }

  if (error) {
    return <div className="alert alert-error">{error}</div>;
  }

  return (
    <div className="wrapper--center-side-detail">
      <div className="flex w-full gap-4">
        <div className="max-w-60 rounded">
          <Image
            src="/assets/gambar (1).png"
            alt="A beautiful stock photo"
            width={1024}
            height={1024}
            className="rounded"
            placeholder="empty"
          />
        </div>
        <div className="flex flex-col justify-end gap-2">
          <div className="text-xl font-sans font-semibold">{playlist?.name || "Public Playlist"}</div>
          <div className="text-7xl font-sans font-bold mb-4">
            {playlist?.description || "No Description Available"}
          </div>
          <div className="flex gap-2">
            <p className="font-bold">wahyu</p> {" - "}{" "}
            <p>
              {playlist?.songs.length || 0} song
              {playlist?.songs.length > 1 ? "s" : ""},{" "}
              {(() => {
                // Calculate total seconds
                const totalSeconds =
                  playlist?.songs.reduce((total, song) => {
                    const [minutes, seconds] = song.time.split(":").map(Number);
                    return total + minutes * 60 + seconds;
                  }, 0) || 0;

                // Convert total seconds to minutes and seconds
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;

                return `${minutes} min ${seconds} sec`;
              })()}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc((100%)+(3rem))] -left-6 mt-6 h-auto bg-customBgColor relative p-6 -mb-6">
        <div className="w-full h-auto">
          {/* Icon Icon */}
          <div className="flex justify-between mb-4">
            <div className="flex gap-6 items-center">
              <div
                className="hover:cursor-pointer"
                onClick={() => handleMenuClick("Button Play Detail")}
              >
                <AiFillPlayCircle className={`w-16 h-16 text-green-500`} />
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => handleMenuClick("Button Shuffle Detail")}
              >
                <TbArrowsShuffle className="w-8 h-8 text-customTextColor" />
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => handleMenuClick("Button Download Detail")}
              >
                <FaRegArrowAltCircleDown className="w-8 h-8 text-customTextColor" />
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => handleMenuClick("Button User Plus Detail")}
              >
                <FaUserPlus className="w-8 h-8 text-customTextColor" />
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => handleMenuClick("Button Ellipsis Detail")}
              >
                <FaEllipsisH className="w-8 h-8 text-customTextColor" />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <div
                  ref={containerRef}
                  className={`relative flex items-center ${
                    isOpen ? "w-80" : "w-10"
                  } transition-all duration-300`}
                >
                  {/* Input */}
                  {isOpen && (
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search"
                      className="input input-bordered input-sm w-full pl-8 rounded-full bg-customBgHoverListMenu"
                    />
                  )}
                  {/* Icon */}
                  <button
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                      setTimeout(() => inputRef.current?.focus(), 100); // Fokuskan input jika terbuka
                    }}
                    className={`absolute ${isOpen ? "top-2" : "-top-2"} left-2`}
                  >
                    <FaSearch className="w-4 h-4 text-customTextColor hover:text-customTextHover hover:cursor-pointer" />
                  </button>
                </div>
              </div>
              <div
                className="flex items-center text-customTextColor hover:text-customTextHover hover:cursor-pointer"
                onClick={() => handleMenuClick("Button Custom Order Detail")}
              >
                Custom order
                <FaListUl className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* TABLE MUSIC */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-customTextColor">
                  <tr className="border-customBgList border-b">
                    <th className="w-auto">#</th>
                    <th className="w-[40%] px-0">Title</th>
                    <th className="w-[30%] px-0">Album</th>
                    <th className="w-[15%] px-0">Date Added</th>
                    <th className="w-[15%] px-0">Time</th>
                  </tr>
                </thead>
                
                <tbody className="text-customTextColor">
                  {playlist?.songs.map((song) => (
                    <tr
                      key={song.songId}
                      className="hover:bg-customBgHover hover:cursor-pointer border-b border-transparent"
                    >
                      <td className="py-1 px-0">{song.songId}</td>{" "}
                      {/* Changed to <td> */}
                      <td className="py-1 px-0">
                        <div className="flex gap-2 items-center">
                          <div className="h-10 w-10 rounded overflow-hidden">
                            <Image
                              src={song.imgSrc}
                              alt={song.title}
                              width={40}
                              height={40}
                              className="object-contain"
                              placeholder="empty"
                            />
                          </div>
                          <div>
                            <div className="font-bold font-sans">
                              {song.title}
                            </div>
                            <div className="font-normal font-sans">
                              {song.artist}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">{song.album}</td>
                      <td className="py-1 px-0">{song.date}</td>
                      <td className="py-1 px-0">{song.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlaylist;
