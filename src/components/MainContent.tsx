"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillPlayCircle,
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlinePlus,
} from "react-icons/ai";

import Image from "next/image";

// Import JSON
import imageData from "/public/imageData.json";
import imageDataGroup from "/public/imageDataGroup.json";
import imageDataHome from "/public/imageDataHome.json";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// CSS untuk Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsBoxArrowUp,
  BsPlusCircle,
} from "react-icons/bs";
import {
  FaEllipsisH,
  FaListUl,
  FaRegArrowAltCircleDown,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedDetail } from "../store/selectedDetailSlice";
// import { setTitlePlaylist } from "../store/titlePlaylist";
import { RootState } from "../store";

const MainContent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const selectedDetail = useSelector(
    (state: RootState) => state.selectedDetail.currentMenu
  );

  console.log(selectedDetail);
  

  const dispatch = useDispatch();

  const handleMenuClick = (menuTitle: string) => {
    setToastMessage(`You clicked on: ${menuTitle}`);
    dispatch(setSelectedDetail(menuTitle)); // Update Redux state
    // dispatch(setTitlePlaylist(menuTitle)); // Update Redux state
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [isBeginning, setIsBeginning] = useState(true); // Tombol kiri nonaktif awalnya
  const [isEnd, setIsEnd] = useState(false); // Tombol kanan aktif awalnya

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSwiperChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // const handleBackToList = () => {
  //   setSelectedDetail(null);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const data = [
    {
      id: 1,
      title: "drunk text",
      artist: "Henry Moodie",
      album: "in all of my lonely nights",
      time: "3:07",
      date: "2 weeks ago",
      imgSrc: "/assets/gambar (1).png",
    },
    {
      id: 2,
      title: "BIRDS OF A FEATHER",
      artist: "Billie Ellish",
      album: "HIT ME HARD AND SOFT",
      time: "3:30",
      date: "3 weeks ago",
      imgSrc: "/assets/gambar (2).png",
    },
    {
      id: 3,
      title: "blue",
      artist: "yung kai",
      album: "blue",
      time: "3:34",
      date: "2 weeks ago",
      imgSrc: "/assets/gambar (3).png",
    },
    {
      id: 4,
      title: "Garam & Madu (Sakit Dadaku)",
      artist: "Tenxi, Jemsii, Naykilla",
      album: "Garam & Madu (Sakit Dadaku)",
      time: "3:04",
      date: "2 weeks ago",
      imgSrc: "/assets/gambar (4).png",
    },
    {
      id: 5,
      title: "Gemuruh Riuh",
      artist: "Mighfar Suganda",
      album: "Gemuruh Riuh",
      time: "4:42",
      date: "2 weeks ago",
      imgSrc: "/assets/gambar (5).png",
    },
    {
      id: 6,
      title: "Sunset Journey",
      artist: "Alicia Keys",
      album: "Endless Skies",
      time: "2:15",
      date: "4 weeks ago",
      imgSrc: "/assets/gambar (6).png",
    },
    {
      id: 7,
      title: "Melody of Rain",
      artist: "John Legend",
      album: "Rainy Day",
      time: "4:05",
      date: "5 days ago",
      imgSrc: "/assets/gambar (7).png",
    },
    {
      id: 8,
      title: "Midnight Journey",
      artist: "Lana Del Rey",
      album: "Journey Through the Night",
      time: "3:50",
      date: "1 month ago",
      imgSrc: "/assets/gambar (8).png",
    },
    {
      id: 9,
      title: "Eternal Echo",
      artist: "Ariana Grande",
      album: "Echoes",
      time: "2:30",
      date: "6 days ago",
      imgSrc: "/assets/gambar (9).png",
    },
    {
      id: 10,
      title: "Dawn Chorus",
      artist: "Sam Smith",
      album: "Morning Light",
      time: "2:20",
      date: "3 days ago",
      imgSrc: "/assets/gambar (10).png",
    },
  ];

  return (
    <div className="w-full flex bg-black h-screen container--page">
      <div className="wrapper--all-side py-1 w-full flex">
        {/* Left-side */}
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
                                <AiOutlineBook className="w-8 h-8" /> Your
                                Library
                              </>
                            ) : (
                              <AiOutlineBook className="w-8 h-8" />
                            )}
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextHover text-customTextColor"
                            onClick={() => handleMenuClick("Plus Library")}
                          >
                            <AiOutlinePlus className="w-5 h-5" />
                          </button>
                          <button
                            className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextHover text-customTextColor"
                            onClick={() => handleMenuClick("Show Right")}
                          >
                            <AiOutlineArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className=" px-2 py-2">
                        <div
                          className="badge bg-customBgHover text-customTextColor border-customBgHover p-4 font-sans font-semibold hover:cursor-pointer"
                          onClick={() => handleMenuClick("Playlist")}
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
                  {imageData.images.map(
                    (image: {
                      id: number;
                      url: string;
                      name: string;
                      description: string;
                    }) => (
                      <span
                        key={image.id}
                        className="flex items-center p-2 hover:bg-customBgHover hover:cursor-pointer rounded-xl"
                        onClick={() => handleMenuClick(image.name ?? "Unknown")}
                      >
                        <button
                          className="btn btn-square w-12 h-12 border-gray-800 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url('${image.url}')`,
                          }}
                        ></button>
                        <div className="ml-4">
                          <div>{image.name}</div>
                          <div>{image.description}</div>
                        </div>
                      </span>
                    )
                  )}
                </>
              ) : (
                <>
                  {imageData.images.map(
                    (image: {
                      id: number;
                      url: string;
                      name: string;
                      description: string;
                    }) => (
                      <span
                        key={image.id}
                        className="flex items-center hover:cursor-pointer rounded-xl"
                        onClick={() => handleMenuClick(image.name ?? "Unknown")}
                      >
                        <button
                          className="btn btn-square w-12 h-12 border-gray-800 hover:border-gray-500 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url('${image.url}')`,
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
        {/* Center-side */}

        <div className="flex-auto text-customTextColor no-scrollbar py-1">
          {/* TOAST */}
          {toastMessage && (
            <div className="toast toast-middle toast-center z-50">
              <div className="alert alert-info">
                <span>{toastMessage}</span>
              </div>
            </div>
          )}
          {/* TOAST */}

          <div
            className={`h-[36.2rem] w-full overflow-y-auto text-customTextColor ${
              selectedDetail === null ? "bg-customBgColor" : "bg-customBgHover"
            }  mt-[4rem] rounded-t-box rounded-b-box mb-20  no-scrollbar p-6`}
          >
            {selectedDetail === null ? (
              <div className="wrapper--center-side-home">
                <div className="flex w-full mb-5 gap-2">
                  <div
                    className="badge bg-white border-white p-4 hover:cursor-pointer badge-active text-black font-sans font-semibold"
                    onClick={() => handleMenuClick("All")}
                  >
                    All
                  </div>
                  <div
                    className="badge bg-customBgHover border-customBgHover p-4 hover:cursor-pointer text-customTextColor font-sans font-semibold"
                    onClick={() => handleMenuClick("Music")}
                  >
                    Music
                  </div>
                  <div
                    className="badge bg-customBgHover border-customBgHover p-4 hover:cursor-pointer text-customTextColor font-sans font-semibold"
                    onClick={() => handleMenuClick("Podcasts")}
                  >
                    Podcasts
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {imageDataHome.images.map(
                    (image: {
                      id: number;
                      url: string;
                      description: string;
                    }) => (
                      <div
                        key={image.id}
                        className="h-14 bg-customBgList border-black flex gap-4 rounded-xl items-center hover:cursor-pointer"
                        onClick={() =>
                          handleMenuClick(image.description ?? "LIST PLAYLIST")
                        }
                      >
                        <div
                          className="bg-cover bg-center w-14 h-14 rounded-l-xl bg-white"
                          style={{
                            backgroundImage: `url('${image.url}')`,
                          }}
                        ></div>
                        <div className="font-sans font-bold">
                          {image.description}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="w-full flex justify-between">
                  <div className="text-3xl font-sans font-bold mb-2 hover:cursor-default">
                    Made For wahyu
                  </div>
                  <div
                    className="font-sans font-bold hover:cursor-pointer"
                    onClick={() => handleMenuClick("Show All")}
                  >
                    Show all
                  </div>
                </div>

                <div
                  className={`w-full mb-8 ${
                    expanded ? "max-w-[46.5rem]" : "max-w-[62.3rem]"
                  }`}
                >
                  <div className="overflow-x-auto">
                    <Swiper
                      slidesPerView={expanded ? 4 : 5} // Menampilkan 3 slide per view
                      centeredSlides={false} // Nonaktifkan centering
                      spaceBetween={20} // Jarak antar slide
                      initialSlide={0} // Slide 1 berada di paling kiri
                      navigation={{
                        prevEl: ".swiper-button-custom-prev", // Kustom tombol prev
                        nextEl: ".swiper-button-custom-next", // Kustom tombol next
                      }}
                      onSwiper={(swiper) => handleSwiperChange(swiper)}
                      onSlideChange={(swiper) => handleSwiperChange(swiper)}
                      modules={[Pagination, Navigation]}
                      className="relative mySwiper"
                    >
                      {imageDataGroup.images.map(
                        (image: {
                          id: number;
                          url: string;
                          description: string;
                        }) => (
                          <SwiperSlide
                            key={image.id}
                            className="rounded-box text-black my-5"
                            onClick={() =>
                              handleMenuClick(image.id.toString() ?? "Unknown")
                            }
                          >
                            <div
                              className={`w-full h-[17rem] bg-black rounded-box border-black border-2 justify-items-center p-2 ${
                                expanded ? "pt-3 pb-3" : "pt-3 pb-3"
                              }  hover:cursor-pointer`}
                            >
                              <div
                                className={`bg-cover bg-center ${
                                  expanded
                                    ? "w-[9.5rem] h-[9.5rem]"
                                    : "w-[10rem] h-[10rem]"
                                } rounded-xl`}
                                style={{
                                  backgroundImage: `url('${image.url}')`,
                                }}
                              ></div>
                              <div className="text-customTextColor font-sans text-start mt-4">
                                <div className="relative group">
                                  <div className="text-sm font-sans font-semibold p-1">
                                    {image.description.length > 50
                                      ? `${image.description.slice(0, 50)}...`
                                      : image.description}
                                  </div>
                                  <div className="absolute invisible group-hover:visible bg-customBgHover text-customTextColor text-xs p-2 rounded shadow-lg -top-10 left-0 z-10">
                                    {image.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )}

                      <button
                        className={`swiper-button-custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full  text-black ${
                          isBeginning ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <BsArrowLeftCircleFill className="w-8 h-8" />
                      </button>

                      <button
                        className={`swiper-button-custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full  text-black ${
                          isEnd ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isEnd}
                      >
                        <BsArrowRightCircleFill className="w-8 h-8" />
                      </button>
                    </Swiper>
                  </div>
                </div>

                <div className="w-full flex justify-between">
                  <div className="text-3xl font-sans font-bold mb-2 hover:cursor-default">
                    Your top mixes
                  </div>
                  <div
                    className="font-sans font-bold hover:cursor-pointer"
                    onClick={() => handleMenuClick("Show All")}
                  >
                    Show all
                  </div>
                </div>

                <div
                  className={`w-full mb-8 ${
                    expanded ? "max-w-[46.5rem]" : "max-w-[62.3rem]"
                  }`}
                >
                  <div className="overflow-x-auto ">
                    <Swiper
                      slidesPerView={expanded ? 4 : 5} // Menampilkan 3 slide per view
                      centeredSlides={false} // Nonaktifkan centering
                      spaceBetween={10} // Jarak antar slide
                      initialSlide={0} // Slide 1 berada di paling kiri
                      navigation={{
                        prevEl: ".swiper-button-custom-prev", // Kustom tombol prev
                        nextEl: ".swiper-button-custom-next", // Kustom tombol next
                      }}
                      onSwiper={(swiper) => handleSwiperChange(swiper)}
                      onSlideChange={(swiper) => handleSwiperChange(swiper)}
                      modules={[Pagination, Navigation]}
                      className="relative mySwiper"
                    >
                      {imageDataGroup.images.map(
                        (image: {
                          id: number;
                          url: string;
                          description: string;
                        }) => (
                          <SwiperSlide
                            key={image.id}
                            className="rounded-box text-black my-5"
                            onClick={() =>
                              handleMenuClick(image.id.toString() ?? "Unknown")
                            }
                          >
                            <div
                              className={`w-full h-[17rem] bg-black rounded-box border-black border-2 justify-items-center p-2 ${
                                expanded ? "pt-3 pb-3" : "pt-3 pb-3"
                              }  hover:cursor-pointer`}
                            >
                              <div
                                className={`bg-cover bg-center ${
                                  expanded
                                    ? "w-[9.5rem] h-[9.5rem]"
                                    : "w-[10rem] h-[10rem]"
                                } rounded-xl`}
                                style={{
                                  backgroundImage: `url('${image.url}')`,
                                }}
                              ></div>
                              <div className="text-customTextColor font-sans text-start mt-4">
                                {/* <div className="text-sm font-sans font-semibold p-1">
                              {image.description.length > 50
                                ? `${image.description.slice(0, 50)}...`
                                : image.description}
                            </div> */}

                                <div className="relative group">
                                  <div className="text-sm font-sans font-semibold p-1">
                                    {image.description.length > 50
                                      ? `${image.description.slice(0, 50)}...`
                                      : image.description}
                                  </div>
                                  <div className="absolute invisible group-hover:visible bg-customBgHover text-customTextColor text-xs p-2 rounded shadow-lg -top-10 left-0 z-10">
                                    {image.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )}

                      <button
                        className={`swiper-button-custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full  text-black ${
                          isBeginning ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <BsArrowLeftCircleFill className="w-8 h-8" />
                      </button>

                      <button
                        className={`swiper-button-custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full  text-black ${
                          isEnd ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isEnd}
                      >
                        <BsArrowRightCircleFill className="w-8 h-8" />
                      </button>
                    </Swiper>
                  </div>
                </div>
              </div>
            ) : (
              <div className="wrapper--center-side-detail">
                <div className="flex w-full gap-4">
                  <div className="h-auto w-56 rounded">
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
                    <div className="text-xl font-sans font-semibold">
                      Public Playlist
                    </div>
                    <div className="text-7xl font-sans font-bold">
                      {selectedDetail}
                    </div>
                    <div className="flex gap-2">
                      <p className="font-bold">wahyu </p> {" - "}{" "}
                      <p>5 song, 17 min 57 sec</p>
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
                          <AiFillPlayCircle
                            className={`w-16 h-16 text-green-500`}
                          />
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            handleMenuClick("Button Shuffle Detail")
                          }
                        >
                          <TbArrowsShuffle className="w-8 h-8 text-customTextColor" />
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            handleMenuClick("Button Download Detail")
                          }
                        >
                          <FaRegArrowAltCircleDown className="w-8 h-8 text-customTextColor" />
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            handleMenuClick("Button User Plus Detail")
                          }
                        >
                          <FaUserPlus className="w-8 h-8 text-customTextColor" />
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            handleMenuClick("Button Ellipsis Detail")
                          }
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
                                setTimeout(
                                  () => inputRef.current?.focus(),
                                  100
                                ); // Fokuskan input jika terbuka
                              }}
                              className={`absolute ${
                                isOpen ? "top-2" : "-top-2"
                              } left-2`}
                            >
                              <FaSearch className="w-4 h-4 text-customTextColor hover:text-customTextHover hover:cursor-pointer" />
                            </button>
                          </div>
                        </div>
                        <div
                          className="flex items-center text-customTextColor hover:text-customTextHover hover:cursor-pointer"
                          onClick={() =>
                            handleMenuClick("Button Custom Order Detail")
                          }
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
                            {data.map((item) => (
                              <tr
                                key={item.id}
                                className="hover:bg-customBgHover hover:cursor-pointer border-b border-transparent"
                              >
                                <th>{item.id}</th>
                                <td className="py-1 px-0">
                                  <div className="flex gap-2 items-center">
                                    <div className="h-10 w-10 rounded overflow-hidden">
                                      <Image
                                        src={item.imgSrc}
                                        alt="A beautiful stock photo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                        placeholder="empty"
                                      />
                                    </div>
                                    <div>
                                      <div className="font-bold font-sans">
                                        {item.title}
                                      </div>
                                      <div className="font-normal font-sans">
                                        {item.artist}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-1 px-0">{item.album}</td>
                                <td className="py-1 px-0">{item.date}</td>
                                <td className="py-1 px-0">{item.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // Tampilan detail */}
                {/* <div>
                  <button
                    className="bg-customBgHover text-customTextColor p-2 rounded hover:bg-customBgHover/80"
                    onClick={handleBackToList}
                  >
                    Back to List
                  </button>
                  <div className="mt-4 p-4 bg-customBgColor border-white border-2 rounded shadow">
                    <h2 className="text-2xl font-bold mb-4">
                      {selectedDetail}
                    </h2>
                    <p>
                      This is the detail view for{" "}
                      <strong>{selectedDetail}</strong>.
                    </p>
                    <div className="w-full h-40 bg-blue-500"></div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>

        {/* Right-side */}
        <div
          className={`h-full flex-initial w-[24rem] px-1 text-customTextColor `}
        >
          <div
            className={`h-[36.2rem] w-full justify-items-start overflow-y-auto text-customTextColor bg-customBgList mt-[4.25rem] rounded-t-box rounded-b-box mb-24 no-scrollbar`}
          >
            <div
              className={`fixed top-[4.5rem] w-[23.5rem] h-24 rounded-t-box  content-center z-10 bg-customBgList/70`}
            >
              <div
                className={`justify-items-center  ${
                  expanded ? "justify-between flex items-center" : ""
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between w-full px-6 items-center">
                    <div>
                      <div className="font-sans font-bold text-customTextColor">
                        Tiktok Playlist
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-circle btn-ghost btn-sm hover:bg-transparent hover:text-customTextHover text-customTextColor mx-2"
                        onClick={() => handleMenuClick("Plus tiktok playlist")}
                      >
                        <AiOutlinePlus className="w-5 h-5" />
                      </button>
                      <button
                        className="btn btn-circle btn-ghost btn-sm hover:bg-transparent hover:text-customTextHover text-customTextColor"
                        onClick={() => handleMenuClick("Right tiktok playlist")}
                      >
                        <AiOutlineArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[40rem] w-full">
                <div className="background-video relative h-full w-full">
                  <video
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    src="/assets/video/yung kai.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="relative -top-32  pb-2">
                  <div className="flex justify-between mb-8 items-center">
                    <div>
                      <div className="font-sans font-bold text-2xl">
                        blue-slowed down
                      </div>
                      <div className="font-sans font-semibold text-xl">
                        yung kai
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div
                        className="hover:cursor-pointer"
                        onClick={() => handleMenuClick("Share Right Content")}
                      >
                        <BsBoxArrowUp className="w-6 h-6" />
                      </div>
                      <div
                        className="hover:cursor-pointer"
                        onClick={() =>
                          handleMenuClick("Add playlist Right Content")
                        }
                      >
                        <BsPlusCircle className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="wrapper-card-right mb-8">
                    <div className="card card-compact w-auto shadow-xl">
                      <figure>
                        {/* <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
                        /> */}
                        <Image
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
                          width={1024}
                          height={1024}
                          className="rounded"
                          placeholder="empty"
                        />
                      </figure>
                      <div className="card-body bg-customBgListMenu rounded-b-box">
                        <div>yung kai</div>
                        <div className="flex justify-between">
                          <div>17.425.970 monthly listeners</div>
                          <div>Follow</div>
                        </div>
                        <div>she cute like flowers</div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper-card-right mb-8">
                    <div className="card card-compact w-auto shadow-xl">
                      <figure>
                        <Image
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
                          width={1024}
                          height={1024}
                          className="rounded"
                          placeholder="empty"
                        />
                      </figure>
                      <div className="card-body bg-customBgListMenu rounded-b-box">
                        <div>yung kai</div>
                        <div className="flex justify-between">
                          <div>17.425.970 monthly listeners</div>
                          <div>Follow</div>
                        </div>
                        <div>she cute like flowers</div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper-card-right -mb-28">
                    <div className="card card-compact w-auto shadow-xl">
                      <figure>
                        <Image
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
                          width={1024}
                          height={1024}
                          className="rounded"
                          placeholder="empty"
                        />
                      </figure>
                      <div className="card-body bg-customBgListMenu rounded-b-box">
                        <div>yung kai</div>
                        <div className="flex justify-between">
                          <div>17.425.970 monthly listeners</div>
                          <div>Follow</div>
                        </div>
                        <div>she cute like flowers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
