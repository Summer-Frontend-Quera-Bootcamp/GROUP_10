interface IClose{
  onClose?:()=>void
}
const CloseButton = ({onClose}:IClose) => {
  return (
    <div className="grid text-[24px] grid-cols-2" onClick={onClose}>
      <div></div>
      <button
        type="button"
        className="bg-transparent text-gray-400 hover:text-gray-600 focus:outline-none border-solid flex justify-end"
      >
        &times;
      </button>
    </div>
  );
};

export default CloseButton;
