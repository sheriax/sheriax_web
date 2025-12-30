'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';
type Theme = 'dark'; // Only dark theme active

interface ThemeContextType {
  theme: Theme;
  // toggleTheme: () => void; // Commented out - no theme switching
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>('dark'); // Always dark theme

  useEffect(() => {
    // Force dark theme always
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    
    // Original light theme logic (commented out for future use)
    // const savedTheme = localStorage.getItem('theme') as Theme;
    // if (savedTheme) {
    //   setTheme(savedTheme);
    // } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   setTheme('dark');
    // } else {
    //   setTheme('light');
    // }
  }, []);

  // Original theme switching logic (commented out for future use)
  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   document.documentElement.classList.remove('light', 'dark');
  //   document.documentElement.classList.add(theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(prev => prev === 'light' ? 'dark' : 'light');
  // };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Original hook with toggleTheme (commented out for future use)
// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context; // Would include { theme, toggleTheme }
// }
