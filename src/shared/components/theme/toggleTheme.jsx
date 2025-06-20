import { useTheme } from '../../hooks/useTheme';
import '../styles/toggleTheme.scss';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`theme-toggle-wrapper ${themeMode}`} onClick={toggleTheme}>
      <div className="icon sun">
        <FaSun />
      </div>
      <div className="icon moon">
        <FaMoon />
      </div>
      <div className={`slider ${themeMode}`}></div>
    </div>
  );
}
