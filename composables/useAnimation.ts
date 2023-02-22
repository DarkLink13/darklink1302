export const useAnimation = (isMoving: { value: boolean}, idx: number, _children: {value: any}, _item: {value: any}, emit: Function, moves: Array<any>, goChildren = false): void => {
  isMoving.value = true
  const transform = useMove((idx + (+goChildren * 3)) % 6, 100 + (+!goChildren * 11), 100 + (+!goChildren * 11))
  _children.value.forEach((child: any, index: number) => {
    if (!goChildren || (index !== idx)) {
      !child && (child = { style: { transform: '' } })
      child.style.transform += (transform ?? '')
      child.style.opacity = 0
    }
  })

  if (_item) {
    !goChildren && (_item.value.style.width = _item.value.style.height = '81%')
    _item.value.style.opacity = +!goChildren
    _item.value.style.transform = transform
  }

  goChildren && (_children.value[idx] = {
    ..._children.value[idx],
    style: {
      ..._children.value[idx]?.style,
      transform: useMove(idx, moves[idx].x, moves[idx].y),
      width: '111%',
      height: '111%'
    }
  })

  setTimeout(() => {
    isMoving.value = false
    emit(goChildren ? 'goChildren' : 'goBack', idx)
  }, 500)
}
