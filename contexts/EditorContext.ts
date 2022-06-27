import React from "react";

type EditorContextType = {
    backgroundColor: string;
    setBackgroundColor: (backgroundColor: string) => void;
    primaryColor: string;
    setPrimaryColor: (primaryColor: string) => void;
    secondaryColor: string;
    setSecondaryColor: (secondaryColor: string) => void;
}

export const EditorContext = React.createContext<EditorContextType>({
    backgroundColor: "#fbbf24",
    setBackgroundColor: () => { },
    primaryColor: "#d97706",
    setPrimaryColor: () => { },
    secondaryColor: "#000000",
    setSecondaryColor: () => { },
})