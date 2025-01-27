"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineExpand,
} from "react-icons/ai";
import { BiVolumeFull } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { CiMaximize1 } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { LuRepeat2 } from "react-icons/lu";
import { MdDevices, MdOutlineQueueMusic } from "react-icons/md";
import { TbArrowsShuffle, TbMicrophone2 } from "react-icons/tb";
import Image from "next/image";

const Footer: React.FC = () => {
  // const audioRef = useRef<HTMLAudioElement>(null); // Referensi elemen audio
  // const [isPlaying, setIsPlaying] = useState(false); // Status play/pause
  // const [currentTime, setCurrentTime] = useState(0); // Waktu saat ini
  // const [duration, setDuration] = useState(0); // Durasi total

  // // Format waktu dari detik ke mm:ss
  // const formatTime = (seconds: number) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const secs = Math.floor(seconds % 60);
  //   return `${minutes}:${secs.toString().padStart(2, "0")}`;
  // };

  // // Handle loaded metadata event untuk mendapatkan durasi audio
  // const handleLoadedMetadata = () => {
  //   if (audioRef.current) {
  //     setDuration(audioRef.current.duration); // Mengatur ulang durasi
  //   }
  // };

  // // Handle play/pause button
  // const handlePlayPause = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // // Update current time saat audio dimainkan
  // const handleTimeUpdate = () => {
  //   if (audioRef.current) {
  //     setCurrentTime(audioRef.current.currentTime);
  //   }
  // };

  // // Progress bar click handler
  // const handleProgressClick = (e: React.MouseEvent<HTMLProgressElement>) => {
  //   const progressBar = e.currentTarget;
  //   const rect = progressBar.getBoundingClientRect();
  //   const clickX = e.clientX - rect.left;
  //   const newTime =
  //     (clickX / progressBar.offsetWidth) * (audioRef.current?.duration || 0);
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = newTime;
  //     setCurrentTime(newTime);
  //   }
  // };

  // // Forward audio
  // const handleForward = () => {
  //   if (audioRef.current) {
  //     const newTime = Math.min(audioRef.current.currentTime + 10, duration); // Maksimal durasi
  //     audioRef.current.currentTime = newTime;
  //     setCurrentTime(newTime);
  //   }
  // };

  // // Rewind audio
  // const handleRewind = () => {
  //   if (audioRef.current) {
  //     const newTime = Math.max(audioRef.current.currentTime - 10, 0); // Minimal 0
  //     audioRef.current.currentTime = newTime;
  //     setCurrentTime(newTime);
  //   }
  // };

  // // Reset duration and currentTime on component mount (setelah refresh)
  // useEffect(() => {
  //   if (audioRef.current) {
  //     // Event loadedmetadata hanya dipicu saat metadata berhasil dimuat
  //     audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

  //     // Memastikan duration di-set setelah refresh
  //     setCurrentTime(0);
  //     setDuration(0); // Reset nilai durasi saat halaman di-refresh

  //     // Pastikan audio di-setup dengan benar
  //     audioRef.current.load();

  //     return () => {
  //       if (audioRef.current) {
  //         audioRef.current.removeEventListener(
  //           "loadedmetadata",
  //           handleLoadedMetadata
  //         );
  //       }
  //     };
  //   }
  // }, []); // Tambahkan efek ini hanya sekali setelah komponen di-mount

  const audioRef = useRef<HTMLAudioElement>(null); // Referensi elemen audio
  const [isPlaying, setIsPlaying] = useState(false); // Status play/pause
  const [currentTime, setCurrentTime] = useState(0); // Waktu saat ini
  const [duration, setDuration] = useState(0); // Durasi total
  const [isDragging, setIsDragging] = useState(false); // Status untuk mendeteksi apakah sedang menyeret progress bar

  // Format waktu dari detik ke mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle loaded metadata event untuk mendapatkan durasi audio
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration); // Mengatur ulang durasi
    }
  };

  // Handle play/pause button
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update current time saat audio dimainkan
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Progress bar click handler
  const handleProgressClick = (e: React.MouseEvent<HTMLProgressElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime =
      (clickX / progressBar.offsetWidth) * (audioRef.current?.duration || 0);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Forward audio
  const handleForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.currentTime + 10, duration); // Maksimal durasi
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Rewind audio
  const handleRewind = () => {
    if (audioRef.current) {
      const newTime = Math.max(audioRef.current.currentTime - 10, 0); // Minimal 0
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle mouse down event untuk mulai menyeret
  const handleProgressMouseDown = (
    e: React.MouseEvent<HTMLProgressElement>
  ) => {
    setIsDragging(true);
    handleProgressClick(e); // Panggil fungsi klik untuk memulai progress dari titik klik
    
    // Pause audio saat mouse down, agar audio tidak berjalan saat menyeret
    if (audioRef.current) {
      audioRef.current.pause();
      // setIsPlaying(false); // Pastikan status play/pause adalah 'false' saat dragging
    }
  };

  // Handle mouse move event untuk menyeret progress
  const handleProgressMouseMove = (e: MouseEvent) => {
    if (isDragging && audioRef.current) {
      const progressBar = e.target as HTMLProgressElement;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime =
        (clickX / progressBar.offsetWidth) * (audioRef.current?.duration || 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle mouse up event untuk berhenti menyeret
  const handleProgressMouseUp = () => {
    setIsDragging(false);

    // Play audio saat mouse up
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true); // Menetapkan status play/pause menjadi 'true' saat audio dimainkan
    }
  };

  // Tambahkan event listener di useEffect untuk menangani mouse move dan mouse up
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleProgressMouseMove(e);
    const handleMouseUp = () => handleProgressMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove); // Pastikan mousemove terdeteksi meskipun keluar dari area progress bar
      document.addEventListener("mouseup", handleMouseUp); // Pastikan mouseup terdeteksi saat mouse dilepaskan
    }

    // Cleanup event listener ketika dragging selesai
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Reset duration dan currentTime saat komponen di-mount
  useEffect(() => {
    if (audioRef.current) {
      // Event loadedmetadata hanya dipicu saat metadata berhasil dimuat
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Memastikan duration di-set setelah refresh
      setCurrentTime(0);
      setDuration(0); // Reset nilai durasi saat halaman di-refresh

      // Pastikan audio di-setup dengan benar
      audioRef.current.load();

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener(
            "loadedmetadata",
            handleLoadedMetadata
          );
        }
      };
    }
  }, []); // Tambahkan efek ini hanya sekali setelah komponen di-mount

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleMenuClick = (menuTitle: string) => {
    setToastMessage(`You clicked on: ${menuTitle}`);
    // Menyembunyikan toast setelah 3 detik
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="footer items-center text-customTextColor bg-black h-[93px]">
      {toastMessage && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
      <div className="flex wrapper--footer w-full h-20">
        <div className="h-full flex-initial w-5/12 content-center">
          <div className="wrapper--left flex content-center items-center gap-4 px-5">
            <div className="1">
              <div
                className="avatar hover:cursor-pointer"
                onClick={() => handleMenuClick("Avatar music playing")}
              >
                <div className="h-16 w-16 rounded">
                  {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                  <Image
                    src="/assets/gambar (1).png"
                    alt="A beautiful stock photo"
                    width={1024}
                    height={1024}
                    className="rounded"
                    placeholder="empty"
                  />
                </div>
              </div>
            </div>
            <div className="2">
              <div>Night Changes</div>
              <div>One Direction</div>
            </div>
            <div
              className="3 hover:cursor-pointer"
              onClick={() => handleMenuClick("Plus Music to Playlist")}
            >
              <FaPlusCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex-auto">

          <div className="wrapper--center flex justify-center h-full content-center items-center gap-4 px-4">
            <audio
              ref={audioRef}
              src="/music/yungkai.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => console.log("Audio playing")}
              onPause={() => console.log("Audio paused")}
              onError={() => console.log("Audio error")}
            ></audio>
            <div className="text-center">
              {/* Controls */}
              <div className="1 flex justify-center w-full items-center gap-4 mb-1">
                <div
                  className="hover:cursor-pointer"
                  onClick={() => console.log("Shuffle Music")}
                >
                  <TbArrowsShuffle className="w-5 h-5 text-customTextColor" />
                </div>
                <div className="hover:cursor-pointer" onClick={handleRewind}>
                  <FaBackwardStep className="w-6 h-6 text-customTextColor" />
                </div>
                <div className="hover:cursor-pointer" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <AiFillPauseCircle className={`w-12 h-12 text-green-500`} />
                  ) : (
                    <AiFillPlayCircle
                      className={`w-12 h-12 text-customTextColor`}
                    />
                  )}
                </div>
                <div className="hover:cursor-pointer" onClick={handleForward}>
                  <FaForwardStep className="w-6 h-6 text-customTextColor" />
                </div>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => console.log("Repeat Music")}
                >
                  <LuRepeat2 className="w-5 h-5 text-customTextColor" />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="2 flex items-center gap-2">
                <p>{formatTime(currentTime)}</p>
                <progress
                  className="progress w-[35rem] bg-customBgHover hover:cursor-pointer"
                  value={duration > 0 ? (currentTime / duration) * 100 : 0}
                  max="100"
                  onClick={handleProgressClick}
                  onMouseDown={handleProgressMouseDown} // Start dragging
                ></progress>
                <p>{formatTime(duration)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex-initial w-5/12">
          <div className="wrapper--right flex justify-center h-full content-center items-center gap-2 px-4">
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("File Play")}
            >
              <BsFilePlay className="w-5 h-5 text-customTextColor" />
            </div>
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("Microphone")}
            >
              <TbMicrophone2 className="w-5 h-5 text-customTextColor" />
            </div>
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("Queue Music")}
            >
              <MdOutlineQueueMusic className="w-5 h-5 text-customTextColor" />
            </div>
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("Device")}
            >
              <MdDevices className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center flex items-center ">
              <BiVolumeFull
                className="w-5 h-5 text-customTextColor mr-1 hover:cursor-pointer"
                onClick={() => handleMenuClick("Icon Volume")}
              />{" "}
              <progress
                className="progress w-24 h-[0.3rem] bg-customBgHover hover:cursor-pointer"
                value="70"
                max="100"
                onClick={() => handleMenuClick("Progress Volume")}
              ></progress>
            </div>
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("Square")}
            >
              <AiOutlineExpand className="w-5 h-5 text-customTextColor" />
            </div>
            <div
              className="h-full content-center hover:cursor-pointer"
              onClick={() => handleMenuClick("Arrow Expand")}
            >
              <CiMaximize1 className="w-5 h-5 text-customTextColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
