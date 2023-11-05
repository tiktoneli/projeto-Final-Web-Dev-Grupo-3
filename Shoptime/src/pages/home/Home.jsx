import CardLogin from "../../components/CardLogin";
import FundoSem from '../../assets/FundoSem.png'

const Home = () => {
  //criar estados e variáveis aqui

  return (
    <div style={{ backgroundImage: `url(${FundoSem})`,minHeight:'100vh', display: 'flex',
    flexDirection: 'column'}}>
      <CardLogin/>
    </div>
  );
};

export default Home;