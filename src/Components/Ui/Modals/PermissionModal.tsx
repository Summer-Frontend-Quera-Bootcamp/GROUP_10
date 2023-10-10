interface IPermission {
  onChange: (id: string) => void;
}

const PermissionModal = ({ onChange }: IPermission) => {
  return (
    <div className="w-[252px] p-[16px] rounded-lg gap-s ">
      <button
        id="full"
        className="border-b-2 py-[10px]"
        onClick={(event) => {
          onChange(event.currentTarget.id);
        }}
      >
        <span className="font-extrabold block text-right text-[14px] h-[25px] leading-6">
          دسترسی کامل
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
        </span>
      </button>
      <button
        id="edit"
        className="border-b-2 py-[10px]"
        onClick={(event) => {
          onChange(event.currentTarget.id);
        }}
      >
        <span className="font-extrabold block text-right text-[14px] h-[25px] leading-6">
          دسترسی ویرایش
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی تواند
          پروژه را حذف یا تسک جدید بسازد.
        </span>
      </button>
      <button
        id="comment"
        className="border-b-2 py-[10px]"
        onClick={(event) => {
          onChange(event.currentTarget.id);
        }}
      >
        <span className="font-extrabold block text-right text-[14px] h-[25px] leading-6">
          دسترسی کامنت
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی کامنت گذاشتن دارد. می تواند ستون تسک ها را تغییر دهد اما
          توانایی ویرایش تنظیمات پروژه را ندارد.
        </span>
      </button>
      <button
        id="none"
        className="py-[10px]"
        onClick={(event) => {
          onChange(event.currentTarget.id);
        }}
      >
        <span className="font-extrabold block text-right text-[14px] h-[25px] leading-5">
          فقط دسترسی مشاهده
        </span>
        <span className="block text-right text-[12px] leading-5 h-[50px]">
          توانایی گذاشتن کامنت یا ویرایش تسک ها را ندارد.
        </span>
      </button>
    </div>
  );
};
export default PermissionModal;
