import {BannerImageBody} from "./styled";
import {useEffect, useRef, useState} from "react";

type TBannerImage = {
    src: string[]
}

type TFormImages = {
    img?: string
    img1?: string
}
const BannerImage = ({src}: TBannerImage) => {
    const [formImages, setFormImage] = useState<TFormImages>({img: src[0], img1: undefined})
    const [pos, setPos] = useState<number>(0)
    const [isActiveImage0, setIsActiveImage] = useState(true)
    const ref = useRef<any>(null)

    const handleImage = () => {
        setFormImage(prevState => ({
            ...prevState,
            [isActiveImage0 ? "img1" : "img"]: src[pos]
        }))
        setIsActiveImage(prevState => !prevState)
    }


    useEffect(() => {
        console.log(pos, ref.current)
        ref.current !== null && handleImage()
    }, [pos])

    useEffect(() => {
        ref.current = setInterval(() => setPos(prevState =>
            prevState === src.length - 1 ? 0 : prevState + 1), 10000)

        return ref.current !== null ? () => clearTimeout(ref.current) : undefined
    }, [])


    return (
        <BannerImageBody id={"bannerImage"} img0={isActiveImage0}>
            <img className={"img0"} src={formImages.img}/>
            <img className={"img1"} src={formImages.img1}/>
        </BannerImageBody>
    )
}

export default BannerImage