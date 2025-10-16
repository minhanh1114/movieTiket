export const timeFormat = (timeString) => {
    const hours = Math.floor(timeString / 60);
    const minutes = timeString % 60;
    return `${hours}h ${minutes}m`;
};
