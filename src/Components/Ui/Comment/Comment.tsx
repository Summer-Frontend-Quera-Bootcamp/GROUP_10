

const Comment = () => {
  return (
    <>
      <div className="flex flex-col items-end justify-center h-screen p-14">
        <div>
          <p className=" text-black-primary text-[38px]">عنوان تسک</p>
        </div>

        <div className="mt-7">
          <p
            dir="rtl"
            className="text-black-primary text-[16px] border border-solid border-black-2 rounded-lg p-5"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان
            <br />
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است
            <br />و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
            بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center h-screen p-14">
         <p></p>
      </div>
    </>
  );
};

export default Comment;
