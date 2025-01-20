"use client";
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlinePlus,
} from "react-icons/ai";

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
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsBoxArrowUp, BsPlusCircle } from "react-icons/bs";

const MainContent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

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
                            } btn-ghost text-customTextHover hover:text-customTextColor hover:bg-transparent`}
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
                          <button className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextColor text-customTextHover">
                            <AiOutlinePlus className="w-5 h-5" />
                          </button>
                          <button className="btn btn-circle btn-ghost btn-md hover:bg-transparent hover:text-customTextColor text-customTextHover">
                            <AiOutlineArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className=" px-2 py-2">
                        <div className="badge bg-customBgHover text-customTextColor border-customBgHover p-4 font-sans font-semibold hover:cursor-pointer">
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
                        } btn-ghost text-customTextHover hover:text-customTextColor hover:bg-transparent`}
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
        <div className="flex-auto overflow-y-auto text-customTextColor no-scrollbar py-1">
          <div
            className={`h-[36.2rem] w-full overflow-y-auto text-customTextColor bg-customBgColor mt-[4rem] rounded-t-box rounded-b-box mb-20  no-scrollbar p-6`}
          >
            {/* <div className="bg-yellow-500 h-[19.5rem] w-full rounded-md flex sponsor-content">
              <div className="flex-initial w-2/6 h-full bg-gray-700"></div>
              <div className="flex-initial w-4/6 h-full bg-customBgHover"></div>
            </div> */}
            <div className="flex w-full mb-5 gap-2">
              <div className="badge bg-white border-white p-4 hover:cursor-pointer badge-active text-black font-sans font-semibold">
                All
              </div>
              <div className="badge bg-customBgHover border-customBgHover p-4 text-customTextColor font-sans font-semibold">
                Music
              </div>
              <div className="badge bg-customBgHover border-customBgHover p-4 text-customTextColor font-sans font-semibold">
                Podcasts
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {imageDataHome.images.map(
                (image: { id: number; url: string; description: string }) => (
                  <div
                    key={image.id}
                    className="h-14 bg-customBgList border-black flex gap-4 rounded-xl items-center hover:cursor-pointer"
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
              <div className="font-sans font-bold hover:cursor-pointer">
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
                  {/* {Array.from({ length: 15 }).map((_, index) => (
                    <SwiperSlide key={index} className="rounded-box text-black">
                      <div className="w-full h-full bg-yellow-100 rounded-box border-black border-2 justify-items-center p-4">
                        <div className="bg-black w-40 h-48 rounded-xl"></div>
                        <div className="text-black font-sans text-start">
                          <div>Catch all the latest music from artist Sheila on 7, Vierra yo...</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))} */}

                  {imageDataGroup.images.map(
                    (image: {
                      id: number;
                      url: string;
                      description: string;
                    }) => (
                      <SwiperSlide
                        key={image.id}
                        className="rounded-box text-black my-5"
                      >
                        <div className="w-full h-64 bg-black rounded-box border-black justify-items-center p-4 hover:cursor-pointer">
                          <div
                            className="bg-cover bg-center w-36 h-36 rounded-xl"
                            style={{
                              backgroundImage: `url('${image.url}')`,
                            }}
                          ></div>
                          <div className="text-customTextHover font-sans text-start mt-4">
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

            <div className="w-full flex justify-between">
              <div className="text-3xl font-sans font-bold mb-2 hover:cursor-default">
                Your top mixes
              </div>
              <div className="font-sans font-bold hover:cursor-pointer">
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
                  {/* {Array.from({ length: 15 }).map((_, index) => (
                    <SwiperSlide key={index} className="rounded-box text-black">
                      <div className="w-full h-full bg-yellow-100 rounded-box border-black border-2 justify-items-center p-4">
                        <div className="bg-black w-40 h-48 rounded-xl"></div>
                        <div className="text-black font-sans text-start">
                          <div>Catch all the latest music from artist Sheila on 7, Vierra yo...</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))} */}

                  {imageDataGroup.images.map(
                    (image: {
                      id: number;
                      url: string;
                      description: string;
                    }) => (
                      <SwiperSlide
                        key={image.id}
                        className="rounded-box text-black my-5"
                      >
                        <div className="w-full h-64 bg-black rounded-box border-black border-2 justify-items-center p-4 hover:cursor-pointer">
                          <div
                            className="bg-cover bg-center w-36 h-36 rounded-xl"
                            style={{
                              backgroundImage: `url('${image.url}')`,
                            }}
                          ></div>
                          <div className="text-customTextHover font-sans text-start mt-4">
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
        </div>

        {/* Right-side */}
        <div
          className={`h-full flex-initial w-[24rem] px-1 text-customTextColor `}
        >
          {/* <div
            className={`h-[36.3rem] w-full overflow-y-auto text-customTextColor bg-customBgColor mt-[4rem] rounded-t-box rounded-b-box mb-24  no-scrollbar p-4`}
          >
            
          </div> */}
          <div
            className={`h-[36.2rem] w-full justify-items-start overflow-y-auto text-customTextColor bg-customBgList mt-[4.25rem] rounded-t-box rounded-b-box mb-24 no-scrollbar`}
          >
            <div
              className={`fixed top-[4.5rem] w-[23.5rem] h-24 rounded-t-box  content-center`}
            >
              <div
                className={`justify-items-center  ${
                  expanded ? "justify-between flex items-center" : ""
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between w-full px-6 items-center">
                    <div>
                      <div className="font-sans font-bold text-customTextHover">
                        Tiktok Playlist
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-circle btn-ghost btn-sm hover:bg-transparent hover:text-customTextColor text-customTextHover mx-2">
                        <AiOutlinePlus className="w-5 h-5" />
                      </button>
                      <button className="btn btn-circle btn-ghost btn-sm hover:bg-transparent hover:text-customTextColor text-customTextHover">
                        <AiOutlineArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="h-[37rem]">
                <div className="background-video">
                  TEXT
                </div>
              </div> */}
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
                      <div><BsBoxArrowUp className="w-6 h-6" /></div>
                      <div><BsPlusCircle className="w-6 h-6" /></div>
                    </div>
                  </div>

                  <div className="wrapper-card-right mb-8">
                    <div className="card card-compact w-auto shadow-xl">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
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
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
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
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
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
