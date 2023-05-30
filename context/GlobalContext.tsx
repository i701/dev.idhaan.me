import React, { useState } from "react"

interface IGlobalContextProps {
  isDhivehi: boolean
  setIsDhivehi: (value: boolean) => void
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  isDhivehi: true,
  setIsDhivehi: () => {},
})

interface IGlobalContextProviderProps {
  children: React.ReactNode
}

export const GlobalContextProvider = (props: IGlobalContextProviderProps) => {
  const [isDhivehi, setIsDhivehi] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        isDhivehi: isDhivehi,
        setIsDhivehi: setIsDhivehi,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
