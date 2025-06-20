import { useEffect, useState, useMemo } from "react";
import { ThemeContext } from "../context/themeContext";

export function ThemeProvider({ children }) {

    const[themeMode, setThemeMode] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    });

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
    }

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(themeMode === "dark" ? "light" : "dark");
        root.classList.add(themeMode);
        localStorage.setItem("theme", themeMode);
    }, [themeMode]);

     const value = useMemo(() => ({ themeMode, setThemeMode, toggleTheme }), [themeMode]);
     
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}