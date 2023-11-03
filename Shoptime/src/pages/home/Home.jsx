import CardLogin from "../../components/CardLogin";
import { LoginProvider } from "../../context/LoginContext";

const Home = () => {
  //criar estados e variáveis aqui

  return (
    <LoginProvider>
      <CardLogin/>
    </LoginProvider>
  );
};

export default Home;