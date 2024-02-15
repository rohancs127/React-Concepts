import { createContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = (props)=>{

    const [name, setName] = useState("Rohan")

    return <GlobalContext.Provider value={{name, setName}}>
        {props.children}
    </GlobalContext.Provider>

};

export default AppContext;