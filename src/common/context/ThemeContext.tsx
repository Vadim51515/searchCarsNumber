import {
    createContext, useContext,
} from 'react';

import { useTheme } from '../hooks/useTheme';

export const ThemeContext = createContext(useTheme());
export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => useContext(ThemeContext);
