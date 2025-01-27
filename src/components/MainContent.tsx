"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  // AiOutlineBook,
  AiOutlinePlus,
} from "react-icons/ai";

import Image from "next/image";
import imageDataGroup from "../../public/json/imageDataGroup.json";
import listData from "../../public/json/recommendPlaylist.json";

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

import { useDispatch, useSelector } from "react-redux";
import { setSelectedDetail } from "../store/selectedDetailSlice";
import { RootState } from "../store";
import LeftSide from "./MainContent/LeftSide";
// import { setToastMessage } from "@/store/toastMessage";
import DetailPlaylist from "./MainContent/DetailPlaylist";
import { setDetailPlaylist } from "@/store/detailPlaylistId";
import axios from "axios";
import { resetPlaylist, setError, setPlaylist } from "@/store/playlistSlice";

const MainContent: React.FC = () => {
  const [isBeginning, setIsBeginning] = useState(true); // Tombol kiri nonaktif awalnya
  const [isEnd, setIsEnd] = useState(false); // Tombol kanan aktif awalnya
  const [menuType, setMenuType] = useState<string>("");
  const [menuId, setMenuId] = useState<string>("");

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const toastMessage = useSelector(
    (state: RootState) => state.toast.toastMessage
  );

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const expanded = useSelector((state: RootState) => state.expandedLeft.expand);

  // Menggunakan useSelector untuk mengambil nilai currentMenu dari Redux state
  const selectedDetail = useSelector(
    (state: RootState) => state.selectedDetail.currentMenu
  );

  const dispatch = useDispatch();

  const handleMenuClick = (menuId: string, menuType: string) => {
    dispatch(resetPlaylist());
    setMenuId(menuId);
    setMenuType(menuType);
    dispatch(setSelectedDetail(menuId));
    dispatch(setDetailPlaylist(parseInt(menuId)));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSwiperChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
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
    <div className="w-full flex bg-black h-screen container--page">
      <div className="wrapper--all-side py-1 w-full flex">
        {/* Left-side */}
        <LeftSide />

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
                    onClick={() => handleMenuClick("All", "")}
                  >
                    All
                  </div>
                  <div
                    className="badge bg-customBgHover border-customBgHover p-4 hover:cursor-pointer text-customTextColor font-sans font-semibold"
                    onClick={() => handleMenuClick("Music", "")}
                  >
                    Music
                  </div>
                  <div
                    className="badge bg-customBgHover border-customBgHover p-4 hover:cursor-pointer text-customTextColor font-sans font-semibold"
                    onClick={() => handleMenuClick("Podcasts", "")}
                  >
                    Podcasts
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {listData.recommendPlaylist.map(
                    (data: {
                      playlistId: number;
                      url: string;
                      description: string;
                    }) => (
                      <div
                        key={data.playlistId}
                        className="h-14 bg-customBgList border-black flex gap-4 rounded-xl items-center hover:cursor-pointer"
                        onClick={() =>
                          handleMenuClick(
                            data.playlistId.toString(),
                            "recommendPlaylist"
                          )
                        }
                      >
                        <div
                          className="bg-cover bg-center w-14 h-14 rounded-l-xl bg-white"
                          style={{
                            backgroundImage: `url('${data.url}')`,
                          }}
                        ></div>
                        <div className="font-sans font-bold">
                          {data.description}
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
                    onClick={() => handleMenuClick("Show All", "")}
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
                              handleMenuClick(image.id.toString(), "group")
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
                    onClick={() => handleMenuClick("Show All", "")}
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
                              handleMenuClick(image.id.toString(), "group")
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
              </div>
            ) : (
              <DetailPlaylist />
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
                        onClick={() =>
                          handleMenuClick("Plus tiktok playlist", "")
                        }
                      >
                        <AiOutlinePlus className="w-5 h-5" />
                      </button>
                      <button
                        className="btn btn-circle btn-ghost btn-sm hover:bg-transparent hover:text-customTextHover text-customTextColor"
                        onClick={() =>
                          handleMenuClick("Right tiktok playlist", "")
                        }
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
                        onClick={() =>
                          handleMenuClick("Share Right Content", "")
                        }
                      >
                        <BsBoxArrowUp className="w-6 h-6" />
                      </div>
                      <div
                        className="hover:cursor-pointer"
                        onClick={() =>
                          handleMenuClick("Add playlist Right Content", "")
                        }
                      >
                        <BsPlusCircle className="w-6 h-6" />
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
