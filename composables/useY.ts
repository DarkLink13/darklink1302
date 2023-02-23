export const useY = (index: number, y = 96.5) =>
`${Math.cos((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (y + (Math.floor(index / 6) * 60))}%`
