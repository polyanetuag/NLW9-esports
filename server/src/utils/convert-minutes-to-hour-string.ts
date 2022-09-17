// 1880 -> 18:00

export function convertMinutesToHoursString(minutesAmount: number) {
    const hours = Math.floor(Number(minutesAmount) / 60);
    const minutes = Number(minutesAmount) % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}