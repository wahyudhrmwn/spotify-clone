import React from "react";
import { AiFillPlayCircle, AiOutlineExpand } from "react-icons/ai";
import { BiVolumeFull } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { CiMaximize1 } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { LuRepeat2 } from "react-icons/lu";
import { MdDevices, MdOutlineQueueMusic } from "react-icons/md";
import { TbArrowsShuffle, TbMicrophone2 } from "react-icons/tb";

const Footer: React.FC = () => {
  return (
    <div className="footer items-center text-customTextHover bg-black h-[93px]">
      <div className="flex wrapper--footer w-full h-20">
        <div className="h-full flex-initial w-5/12 content-center">
          <div className="wrapper--left flex content-center items-center gap-4 px-5">
            <div className="1">
              <div className="avatar">
                <div className="h-16 w-16 rounded">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="2">
              <div>Night Changes</div>
              <div>One Direction</div>
            </div>
            <div className="3">
              <FaPlusCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex-auto">
          <div className="wrapper--center flex justify-center h-full content-center items-center gap-4 px-4">
            <div className="text-center">
              <div className="1 flex justify-center w-full items-center gap-4 mb-2">
                <div>
                  <TbArrowsShuffle className="w-5 h-5 text-customTextColor" />
                </div>
                <div>
                  <FaBackwardStep className="w-6 h-6 text-customTextColor" />
                </div>
                <div>
                  <AiFillPlayCircle className="w-10 h-10 text-customTextColor" />
                </div>
                <div>
                  <FaForwardStep className="w-6 h-6 text-customTextColor" />
                </div>
                <div>
                  <LuRepeat2 className="w-5 h-5 text-customTextColor" />
                </div>
              </div>
              <div className="2 flex items-center gap-2">
                <p>0:23</p>
                <progress
                  className="progress w-[35rem] bg-customBgHover"
                  value={20}
                  max="100"
                ></progress>
                <p>3:23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex-initial w-5/12">
          <div className="wrapper--right flex justify-center h-full content-center items-center gap-2 px-4">
            <div className="h-full content-center ">
              <BsFilePlay className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center ">
              <TbMicrophone2 className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center ">
              <MdOutlineQueueMusic className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center ">
              <MdDevices className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center  flex items-center">
              <BiVolumeFull className="w-5 h-5 text-customTextColor mr-1" />{" "}
              <progress
                className="progress w-24 h-[0.3rem] bg-customBgHover"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="h-full content-center ">
              <AiOutlineExpand className="w-5 h-5 text-customTextColor" />
            </div>
            <div className="h-full content-center ">
              <CiMaximize1 className="w-5 h-5 text-customTextColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
