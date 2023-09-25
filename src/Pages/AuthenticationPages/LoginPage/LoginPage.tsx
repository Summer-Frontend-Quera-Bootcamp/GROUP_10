import AuthLayout from "../../../Layouts/AuthLayout";
import { ContainerAuth } from "../../../Components/Ui/Containers";

const Login = () => {
  return (
    <AuthLayout>
      <ContainerAuth heading="Hellow">
        <div>
          <h2>salam</h2>
        </div>
      </ContainerAuth>
    </AuthLayout>
  );
};

export default Login;
