import { useState, ChangeEvent, useEffect } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GoFile } from "react-icons/go";
import { GoLink } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import jMoment from "jalali-moment";
import { FaCircleUser } from "react-icons/fa6";

interface Comment {
  text: string;
  date: string;
}

const Comments = () => {
  const [inputHeight, setInputHeight] = useState<number>(67);
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [showButton, setShowButton] = useState<boolean>(false);
  const [persianDate, setPersianDate] = useState<string>("");
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollHeight > 250) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const createElement = (text: string) => {
    const newComment: Comment = {
      text: text,
      date: persianDate,
    };
    setComments([...comments, newComment]);
  };

  const handleOuterClick = () => {
    setInputHeight(40);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() !== "") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      createElement(inputValue);
      handleOuterClick();
      setShowButton(false);
      setInputHeight(67);
      setInputValue("");
    }
  };

  useEffect(() => {
    const today = jMoment();
    const formatDate = today.format("jYYYY/jMM/jDD");
    setPersianDate(formatDate);
  }, []);

  const handleClick = () => {
    setInputHeight(150);
    setShowButton(true);
  };

  return (
    <div className="flex flex-col w-full h-full justify-between text-right">
      <div
        id="targetDiv"
        onScroll={handleScroll}
        style={{ overflowY: showScroll ? "scroll" : "auto" }}
      >
        {comments.map((comment, index) => (
          <div key={index} className="flex p-5">
            <p className="w-[560px] p-5 me-2 rounded-xl bg-gray-100 border border-solid">
              <span className="flex flex-wrap-reverse items-center justify-between pb-3">
                <p className="text-xs text-[#AAAAAA]">{comment.date}</p>
                <span className="flex items-center">
                  <p className="text-xs text-[#AAAAAA] me-2">کامنت گذاشتید</p>
                  <p className="text-[#208D8E] font-bold">شما</p>
                </span>
              </span>
              <p className="">{comment.text}</p>
            </p>

            <FaCircleUser className="text-3xl" />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-end w-full">
        <div className="relative flex flex-col">
          <textarea
            value={inputValue}
            id="commentText"
            className="flex w-full p-5 pe-3 text-right shadow-[0px_-15px_20px_0px_rgba(0,0,0,0.1)] rounded-xl"
            placeholder="کامنت شما"
            style={{
              height: inputHeight + "px",
              width: "100%",
              outline: "none",
              resize: "none",
            }}
            onClick={handleClick}
            onChange={handleInputChange}
          />
          <div className="absolute top-5 left-5">
            <AiOutlineComment className="text-gray-400 text-2xl" />
          </div>
          {showButton && (
            <div className="flex items-center justify-between pb-5">
              <button
                id="submitButton"
                className={`px-3 py-1.5 text-bold-xs rounded-md ms-3 text-white outline-none ${
                  buttonActive
                    ? "bg-[#208D8E] cursor-pointer"
                    : "bg-[#208c8e94] cursor-default"
                }`}
                onClick={handleSubmit}
                disabled={!buttonActive}
              >
                ثبت کامنت
              </button>
              <div className="flex items-center gap-5">
                <BsEmojiSmile className="text-[24px] text-gray-400 cursor-pointer" />
                <GoFile className="text-[24px] text-gray-400 cursor-pointer" />
                <GoLink className="text-[24px] text-gray-400 cursor-pointer" />
                <MdAlternateEmail className="text-[26px] text-gray-400 me-5 cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
