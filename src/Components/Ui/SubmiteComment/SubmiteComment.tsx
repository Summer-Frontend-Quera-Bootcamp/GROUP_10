import React, { useState } from "react";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      // Create a new comment with the current time
      const newComment = {
        text: `${inputValue}`,
        time: getCurrentTime(),
      };

      // Add the new comment to the beginning of the comments array
      setComments([newComment, ...comments]);

      // Clear the input field
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col items-start justify-start h-screen p-4 bg-gray-100">
      <div className="flex items-center mb-4">
        <button
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={handleSubmit}
        >
          ثبت
        </button>
        <input
          dir="rtl"
          type="text"
          className="ml-2 w-659 h-209 py-2 px-4 text-2xl border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="کامنت"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col-reverse">
        {comments.map((comment, index) => (
          <div key={index} className="p-2 border rounded-lg shadow-md mb-2">
            <p dir="rtl" className="font-bold text-blue-500">
              شما
            </p>
            <p dir="rtl" className="font-bold text-gray-500"> کامنت گذاشته اید</p>
            <br />
            <p dir="rtl">{comment.text}</p>
            <div className="text-xs text-blue-500 mt-1">{comment.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
