export const useMove = (index: number, x = 105, y = 105) =>
    `translate(${useX(index, x)}, ${useY(index, y)})`
