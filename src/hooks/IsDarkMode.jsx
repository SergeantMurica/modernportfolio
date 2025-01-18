import { useEffect, useState } from 'react';

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.classList.toggle('dark-mode', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    return { isDarkMode, toggleTheme };
};

export default useTheme;