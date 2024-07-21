import React, {useEffect, useState} from "react";
import RequestDHCAPi from "./request";

type IForms = {
    menu: boolean
}
type TResponse = {
    status: string,
    scrollTop: number
    result: { status: "Ok" | "Reg", resume?: { name: string, url: string, logo: string }[] }
}

type IGlobalContextContext = {
    form: IForms
    scrollTop: {
        value: number,
        onChange?: (value: number) => void
    },
    dataResume: TResponse["result"]["resume"]
    actions: {
        showMenu?: (show: boolean) => void
    }
}
const politicPasswordsContextInitialState: IGlobalContextContext = {
    form: {
        menu: false
    },
    scrollTop: {
        value: 0
    },
    dataResume: [],
    actions: {}
}

export const globalContext = React.createContext<IGlobalContextContext>(politicPasswordsContextInitialState);
export const GlobalContextProvider: React.FC<any> = ({children}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [dataResume, setDataResume] = useState<TResponse["result"]["resume"]>([])
    const [scrollTop, setScrollTop] = useState<number>(0)

    useEffect(() => {
        RequestDHCAPi<TResponse>({
            url: "analytics", onSuccess: (data) => {
                if (data?.status.indexOf("success") > -1) {
                    localStorage.setItem("statistic", "1")
                    setDataResume(data?.result?.resume || [])
                }
            }
        })
    }, []);

    return (
        <globalContext.Provider value={{
            form: {
                menu: showMenu
            },
            scrollTop: {
                value: scrollTop,
                onChange: setScrollTop
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