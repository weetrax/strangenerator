import { useState } from "react"
import { EditorContext } from "../contexts/EditorContext"

type EditorProviderProps = {
    children: React.ReactNode
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {

    const [backgroundColor, setBackgroundColor] = useState<string>("#fbbf24")
    const [primaryColor, setPrimaryColor] = useState<string>("#d97706")
    const [secondaryColor, setSecondaryColor] = useState<string>("#000000")


    return <EditorContext.Provider value={{ backgroundColor, setBackgroundColor, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
        {children}
    </EditorContext.Provider>
}