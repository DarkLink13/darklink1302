export const useMove = (index: number, x = 100, y = 100) => `translate(${Math.sin((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (x + (Math.floor(index / 6) * 60))}%, ${Math.cos((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (y + (Math.floor(index / 6) * 60))}%)`
