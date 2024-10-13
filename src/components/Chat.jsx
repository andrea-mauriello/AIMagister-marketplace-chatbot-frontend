import chatbotIcon from "../assets/icons/chatbotIcon.svg";
import closeIcon from "../assets/icons/closeIcon.svg";
import infoIcon from "../assets/icons/infoIcon.svg";

import { useEffect, useState } from "react";

const Chat = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isNeverClicked, setIsNeverClicked] = useState(true);
  const [showImg, setShowImg] = useState(true);
  const [showChatContent, setShowChatContent] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpening) {
      setShowImg(false);

      timeoutId = setTimeout(() => {
        setShowChatContent(true);
      }, 250);
    } else {
      setShowChatContent(false);

      timeoutId = setTimeout(() => {
        setShowImg(true);
      }, 250);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpening]);

  return (
    <>
      <div
        tabIndex={!isOpening ? 0 : undefined}
        role={!isOpening ? "button" : undefined}
        aria-pressed={!isOpening ? false : undefined}
        className={`${isOpening ? "animate-open_chatbot" : "cursor-pointer rounded-full hover:bg-aim_purple-3 focus:ring-4 focus:ring-aim_purple-5"} ${!isOpening && !isNeverClicked ? "animate-close_chatbot" : ""} fixed bottom-8 right-8 flex h-20 w-20 flex-col bg-aim_purple-4 p-4 shadow-sm shadow-aim_purple-5 transition-shadow focus:outline-none`}
        onClick={() => {
          if (!isOpening) {
            setIsOpening(true);
          }
        }}
        onKeyDown={(e) => {
          if (!isOpening && (e.key === "Enter" || e.key === " "))
            setIsOpening(true);
        }}
      >
        <img
          src={chatbotIcon}
          alt="chatbot icon"
          className={`${showImg ? "block" : "hidden"}`}
        />

        {showChatContent && (
          <div
            role={isOpening ? "group" : undefined}
            className={`flex flex-row justify-between`}
          >
            <button
              type="button"
              className={
                "text-aim_black-3 flex h-9 w-auto items-center gap-3 rounded-md bg-aim_white-1 px-3 py-2 text-xs font-bold outline-none ring-aim_purple-5 transition-all duration-300 hover:bg-aim_purple-2 focus:ring-4"
              }
            >
              <img src={infoIcon} alt="info icon" />
              NOVITÀ
            </button>
            <button
              type="button"
              className="text-aim_black-3 flex h-9 w-9 items-center justify-center rounded-full bg-aim_white-1 p-2 outline-none ring-aim_purple-5 transition-all duration-300 hover:bg-aim_purple-2 focus:ring-4"
              onClick={() => {
                setIsOpening(false);
                setIsNeverClicked(false);
              }}
            >
              <img src={closeIcon} alt="close icon" className="" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
