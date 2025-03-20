import {
    BellIcon,
    MenuIcon,
    MicIcon,
    PlusIcon,
    SearchIcon,
    StarIcon,
  } from "lucide-react";
import React from "react";
import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { HeaderMenuSection } from "./sections/HeaderMenuSection/HeaderMenuSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection/NavigationSidebarSection";
import { VideoGridSection } from "./sections/VideoGridSection/VideoGridSection";
import { VideoGridWrapperSection } from "./sections/VideoGridWrapperSection/VideoGridWrapperSection";
import { VideoThumbnailRowSection } from "./sections/VideoThumbnailRowSection/VideoThumbnailRowSection";
import { VideoThumbnailWrapperSection } from "./sections/VideoThumbnailWrapperSection/VideoThumbnailWrapperSection";
  
export const Home = () => {
  // Navigation items data
  const navigationItems = [
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/history.svg",
      label: "History",
    },
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/yourvideos.svg",
      label: "Your Videos",
    },
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/liked.svg",
      label: "Liked Videos",
    },
  ];

  return (
    <div className="bg-[#000000] flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-full max-w-[1280px] relative">
        {/* Header MenuIcon */}
        <header className="w-full h-14 bg-background-color flex items-center justify-between px-4">
          {/* Left section - Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-2">
              <MenuIcon className="w-6 h-6" />
            </Button>
            <div className="pl-4 pr-3.5 py-[18px]">
              <img
                className="w-[90px] h-5"
                alt="Youtube logo"
                src="https://c.animaapp.com/m8hmh8dscNuAQt/img/youtube-logo.svg"
              />
            </div>
          </div>

          {/* Middle section - SearchIcon */}
          <div className="flex items-center">
            <div className="flex">
              <div className="relative flex items-center">
                <Input
                  className="w-[310px] h-10 bg-[#121212] rounded-[2px_0px_0px_2px] border border-border-color px-2 text-gray-color"
                  placeholder="Search"
                />
              </div>
              <Button className="w-16 h-10 bg-border-color rounded-[0px_2px_2px_0px] border border-solid border-[#303030] flex justify-center items-center">
                <SearchIcon className="w-6 h-6" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 bg-black rounded-[40px]"
            >
              <MicIcon className="w-6 h-6" />
            </Button>
          </div>

          {/* Right section - User controls */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-2">
              <PlusIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <StarIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <BellIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-0 ml-2">
              <Avatar className="w-8 h-8">
                <img
                  src="https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar.png"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </Avatar>
            </Button>
          </div>
        </header>

        {/* Main content layout */}
        <div className="flex">
          {/* Sidebar navigation */}
          <aside className="w-60">
            <NavigationSidebarSection />

            {/* Navigation items */}
            <div className="mt-[165px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 px-6 py-2 ${
                    index > 0 ? "mt-4" : ""
                  }`}
                >
                  <div
                    className="w-6 h-6 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <div className="text-white-color text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main content area */}
          <main className="flex-1">
            <HeaderMenuSection />

            <div className="mt-[138px] ml-[264px] w-[991px]">
              <VideoThumbnailRowSection />
              <VideoGridWrapperSection />
              <VideoThumbnailWrapperSection />
              <VideoGridSection />
              <MainContentSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
  