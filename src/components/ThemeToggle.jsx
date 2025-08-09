import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        const saveTheme = localStorage.getItem("theme") || "light";
        setTheme(saveTheme);
        document.documentElement.setAttribute("data-theme", saveTheme);

    },[]);


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark":"light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    
    return (
        <button className=' hover:cursor-pointer m-2' onClick={toggleTheme}>
            {theme === "light"? "🌙": "☀️" }
        </button>
    );
};

export default ThemeToggle;