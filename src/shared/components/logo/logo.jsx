import {useTheme} from "../../hooks/useTheme"
import logoDark from "../../../assets/logoDark.svg";
import logoLight from "../../../assets/logoLight.svg";
import "../styles/logo.scss"



export function Logo() {
  const { themeMode } = useTheme();
  const logo = themeMode === "dark" ? logoDark : logoLight;


  return <img src={logo} alt="Logo" id="logo"/>;
}