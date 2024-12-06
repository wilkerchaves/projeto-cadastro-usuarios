export const convertPtBrDateToDatepicker = (date: string | Date): Date | null => {

    if (date) {

        const [day, month, year] = date.toString().split('/').map(Number);
        const validaDate = isValidDate(day, month - 1, year)
        if (validaDate) {
            return new Date(year, month - 1, day)
        }
    }
    return null;
}

const isValidDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month, day)
    return (
        date.getFullYear() === year,
        date.getMonth() === month,
        date.getDate() === day
    )
}