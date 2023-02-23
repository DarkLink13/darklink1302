export const useX = (index: number, x = 96.5) =>
    `${Math.sin((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (x + (Math.floor(index / 6) * 60))}%`
