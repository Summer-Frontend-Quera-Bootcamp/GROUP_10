import { ContainerAuth } from "../../../Components/Ui/Containers";
const BackUpEmail = () => {
  return (
    <ContainerAuth heading=" فراموشی رمز عبور ">
      <p className="text-right" style={{ direction: "rtl" }}>
        لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
      </p>
    </ContainerAuth>
  );
};

export default BackUpEmail;
