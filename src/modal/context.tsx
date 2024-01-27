import React, {useEffect, useState} from "react";
import RequestDHCAPi from "./request";

type IForms = {
    menu: boolean
}
type TResponse = {
    status: string,
    result: { status: "Ok" | "Reg", resume?: { name: string, url: string, logo: string }[] }
}

type IGlobalContextContext = {
    form: IForms
    dataResume: TResponse["result"]["resume"]
    actions: {
        showMenu?: (show: boolean) => void
    }
}
const politicPasswordsContextInitialState: IGlobalContextContext = {
    form: {
        menu: false
    },
    dataResume: [],
    actions: {}
}

export const globalContext = React.createContext<IGlobalContextContext>(politicPasswordsContextInitialState);
export const GlobalContextProvider: React.FC<any> = ({children}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [dataResume, setDataResume] = useState<TResponse["result"]["resume"]>([])

    useEffect(() => {
        // const statictic = localStorage.getItem("statistic")

        // if (!statictic) {
            RequestDHCAPi<TResponse>({
                url: "analytics", onSuccess: (data) => {
                    if (data?.status.indexOf("success") > -1) {
                        localStorage.setItem("statistic", "1")
                        setDataResume(data?.result?.resume || [])
                    }
                }
            })
        // }
    }, []);

    return (
        <globalContext.Provider value={{
            form: {
                menu: showMenu
            },
            dataResume,
            actions: {
                showMenu: setShowMenu
            }
        }}>
            {children}
        </globalContext.Provider>
    )
}