export const useAnimation = (idx: number, children: any, item: any, moves: Array<any>, goChildren = false): void => {
  const transform = useMove((idx + (+goChildren * 3)) % 6, 100 + (+!goChildren * 11), 100 + (+!goChildren * 11))
  children.forEach((child: any, index: number) => {
    if (!goChildren || (index !== idx)) {
      !child && (child = { style: { transform: '' } })
      child.style.transform += (transform ?? '')
      // child.style.opacity = 0
    }
  })

  if (item) {
    !goChildren && (item.style.width = item.style.height = '81%')
    // item.style.opacity = +!goChildren
    item.style.transform = transform
  }

  goChildren && (children[idx].style = {
    ...children[idx]?.style,
    transform: useMove(idx, moves[idx].x, moves[idx].y),
    width: '111%',
    height: '111%'
  })
}
