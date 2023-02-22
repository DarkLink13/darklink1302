export const useSin = (index: number, idx = 108) => Math.sin((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (idx + (Math.floor(index / 6) * 60))
