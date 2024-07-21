import {BodyContent, DeliverContent} from "./styled";
import {useContext, useEffect, useState} from "react";
import {globalContext} from "../../../../../modal/context";
import {getPercents} from "../../supply/getPercents";

const Content = () => {
    const {scrollTop} = useContext(globalContext)
    const [opacality, setOpacality] = useState(0)
    const [border, setBorder] = useState<{invert: number, percent: number}>({invert: 1, percent: 0})

    const handleScroll = (e: any) => {
        
    }

    useEffect(() => {
        const banner = document.getElementById("bannerImage")
        if (banner === null) {
            return
        }
        const min = banner.offsetHeight * 0.3
        const max = banner.offsetHeight - min

        if (scrollTop.value < min) {
            setOpacality(0)
        } else if (scrollTop.value < max) {
            setOpacality(getPercents(max, min, scrollTop.value))
        } else {
            setOpacality(1)
        }
        if (scrollTop.value < max) {
            setBorder({invert: 1, percent: 0})
        } else if (scrollTop.value < max + min) {
            const percent = getPercents((max + min), max, scrollTop.value)
            const invert = 1 - percent
            setBorder({invert, percent})
        } else {
            setBorder({invert: 0, percent: 1})
        }
    }, [scrollTop.value])

    return (
        <BodyContent
            opacity={opacality}
            height={(1 - opacality) * 100}
            border={border.invert * 20}
        >
            <DeliverContent onClick={handleScroll} opacity={border.percent}><div/></DeliverContent>
        </BodyContent>
    )
}

export default Content