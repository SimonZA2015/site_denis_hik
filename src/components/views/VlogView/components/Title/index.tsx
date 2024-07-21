import {TitleBody} from "./styled";
import React, {useContext, useEffect, useState} from "react";
import {globalContext} from "../../../../../modal/context";
import {getPercents} from "../../supply/getPercents";

export const Title = () => {
    const {scrollTop} = useContext(globalContext)
    const [left, setLeft] = useState(1074)

    useEffect(() => {
        setLeft(1074 * (1 - getPercents(10, 0, scrollTop.value)))
    }, [scrollTop.value])

    return (
        <TitleBody left={left}>
            <h1>Blog</h1>
        </TitleBody>
    )
}