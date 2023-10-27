import { ContainerModal } from "../../Containers";
import Comments from "./Comments/Comments";
import FurtherInformation from "./FurtherInformation/FurtherInformation";
import MainContent from "./MainContent/MainContent";
import Options from "./Options/Options";

const ModalInformation = () => {
  return (
    <div>
      <div className="relative h-[550px]">
        <div className="grid grid-cols-2 h-[600px] rounded-xl overflow-hidden p-2 absolute left-[-30px] bottom-[-50px]">
          <div className="border-solid border-e col-span-1 border-b">
            <FurtherInformation />
          </div>
          <div className="col-span-1 border-b">
            <Options />
          </div>
          <div className="col-span-1 border-solid border-e h-[450px]">
            <div className="flex h-full">
              <div className="flex w-full">
                <Comments />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInformation;
