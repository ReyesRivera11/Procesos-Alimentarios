import Uthh from "../assets/images/uthh-logo.png";
import Escudo from "../assets/images/escudo-hidalgo.png";
import { styles } from "../assets/styles/global-styles";
const Header = () => {
    const {backgroundBeige} = styles;
    console.log(backgroundBeige)
  return (
    <>
        <div className={`bg-[${backgroundBeige}] w-full h-24 p-2 flex justify-center gap-20`}>
            <img src={Uthh} alt="Logo uthh" className="w-[400px] object-contain "/>
            <img src={Escudo} alt="Escudo Hidalgo" />
        </div>
    </>
  )
}

export default Header