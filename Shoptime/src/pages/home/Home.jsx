import CardLogin from "../../components/CardLogin";
import Fundo from '../../assets/Fundo.png'

const Home = () => {

  return (
    <div style={{ backgroundImage: `url(${Fundo})`,minHeight:'100vh', display: 'flex',
    flexDirection: 'column'}}>
      <CardLogin/>
    </div>
  );
};

export default Home;