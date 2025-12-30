'use client';

// import { useTheme } from '@/components/ThemeProvider'; // Not needed for dark-only mode
// import { Moon, Sun } from 'lucide-react'; // Icons not needed for dark-only mode

export default function ThemeToggle() {
  // Theme toggle disabled - always dark mode
  // Return null to hide the component entirely
  return null;

  // Original theme toggle component (commented out for future use)
  // const { theme, toggleTheme } = useTheme();
  // return (
  //   <button
  //     onClick={toggleTheme}
  //     className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
  //     aria-label="Toggle theme"
  //   >
  //     {theme === 'light' ? (
  //       <Moon className="w-5 h-5 text-foreground/70" />
  //     ) : (
  //       <Sun className="w-5 h-5 text-foreground/70" />
  //     )}
  //   </button>
  // );
}
