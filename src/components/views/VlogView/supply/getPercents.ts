export const getPercents = (max: number, min: number, value: number) => {
    const range = max - min
    const difference = value - min
    return difference / range
}