export const timeFormat = (timeString) => {
    const hours = Math.floor(timeString / 60);
    const minutes = timeString % 60;
    return `${hours}h ${minutes}m`;
};
export const timeFormat2 = (timeString) => {
    const hours = Math.floor(timeString / 60);
    const minutes = timeString % 60;
    return `${hours}hours ${minutes}minutes`;
};
export const iosTimeFormat = (timeString) => {
    const newDate = new Date(timeString);
    return newDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
};
export const standardTimeFormat = (timeString) => {
    const date = new Date(timeString);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    const day = date.getDate();
    const suffix = day > 3 && day < 21 ? 'th' : ['th', 'st', 'nd', 'rd'][day % 10] || 'th';
    return `${day}${suffix} ${formattedDate} • ${iosTimeFormat(timeString)}`;
};
export const formatDateTime = (timeString) => {
    const time = new Date(timeString);
    return time.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};
