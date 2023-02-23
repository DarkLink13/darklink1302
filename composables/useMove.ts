export const useMove = (index: number, x = 96.5, y = 96.5) =>
    `translate(${useX(index, x)}, ${useY(index, y)})`
