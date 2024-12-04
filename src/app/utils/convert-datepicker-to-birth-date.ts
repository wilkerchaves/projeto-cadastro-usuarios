export const convertDatepickerToBirthDate = (date: Date): string => {
    const day = padZero(date.getDate())
    const month = padZero(date.getMonth())
    const year = padZero(date.getFullYear())

    return `${day}/${month}/${year}`;
}

const padZero = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
}