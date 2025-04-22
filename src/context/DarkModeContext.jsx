import { createContext, useState } from 'react';

// 데이터를 담고 있는 곳(context)
export const DarkModeContext = createContext();

//데이터를 보여주는 곳(provider)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    //값을 전달할거야
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}