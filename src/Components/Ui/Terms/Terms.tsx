import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { ContainerModal } from "../Containers";
import { GiPlainCircle } from "react-icons/gi";
interface ITerms extends PropsWithChildren {
  closeModal: Dispatch<SetStateAction<boolean>>;
}
const Terms: React.FC<ITerms> = ({ closeModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
        <ContainerModal
          width="w-full"
          heading="قوانین و مقررات"
          onClose={() => {
            closeModal(false);
          }}
        >
          <div className="flex flex-col justify-start text-right">
            <p className="leading-loose font-bold">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="flex flex-col mr-5">
              <div className="flex  gap-x-2 my-4">
                <p className="leading-6 font-medium">
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                </p>
                <span>
                  <GiPlainCircle className="mt-1 text-xs" />
                </span>
              </div>
              <div className="flex  gap-x-2 my-4">
                <p className="leading-6 font-medium">
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                </p>
                <span>
                  <GiPlainCircle className="mt-1 text-xs" />
                </span>
              </div>
              <div className="flex  gap-x-2 my-4">
                <p className="leading-6 font-medium">
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                </p>
                <span>
                  <GiPlainCircle className="mt-1 text-xs" />
                </span>
              </div>
            </div>
          </div>
        </ContainerModal>
      </div>
    </>
  );
};

export default Terms;
