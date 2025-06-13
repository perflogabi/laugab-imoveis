"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  attribute?: string // compatível com o uso atual
  defaultTheme?: "light" | "dark"
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    document.documentElement.classList.remove(theme === "light" ? "dark" : "light")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 