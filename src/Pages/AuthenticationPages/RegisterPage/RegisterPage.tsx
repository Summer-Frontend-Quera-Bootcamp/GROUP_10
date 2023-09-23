//------ Functional Imports ----//
import { FormEvent, useState } from "react";

//------ Other Components -----//

import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";

export const Register = () => {
  const [checkBox, setCheckBox] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person, checkBox);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContainerAuth heading=" ثبت‌نام در کوئرا تسک منیجر ">
        <div className="flex flex-col">
          <div>
            <InputText
              onChange={(event) =>
                setPerson({ ...person, name: event.target.value })
              }
              label="نام کامل"
              value={person.name}
              type="text"
            />
          </div>
          <div className="mt-m">
            <InputText
              onChange={(event) =>
                setPerson({ ...person, email: event.target.value })
              }
              label="ایمیل"
              value={person.email}
              type="email"
            />
          </div>
          <div className="my-m">
            <InputText
              onChange={(event) =>
                setPerson({ ...person, password: event.target.value })
              }
              label="رمز عبور"
              value={person.password}
              type="password"
            />
          </div>
          <div dir="rtl" className="flex items-center">
            <input
              type="checkBox"
              id="guideline"
              className="w-m h-m cursor-pointer rounded"
              onChange={() => setCheckBox(checkBox ? false : true)}
            />
            <label
              htmlFor="guideline"
              className="mx-xs font-bold cursor-pointer"
            >
              قوانین و مقررات را می‌پذیرم.
            </label>
          </div>
          <div className="mt-m">
            <ButtonPrimary onClick={() => {}} bigger={true} type="submit">
              ثبت‌نام
            </ButtonPrimary>
          </div>
        </div>
      </ContainerAuth>
    </form>
  );
};
export default Register;
