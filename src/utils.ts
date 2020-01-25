export const capitalize = (s:string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
};

// really basic, but works for my use case
export const pluralize = (s:string, num:number) => {
    if (s === "Monastery"){
        return num === 1 ? s : "Monasteries";
    }
    return num === 1 ? s : s + "s";
};