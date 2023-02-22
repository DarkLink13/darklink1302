import { CSSProperties } from 'vue'
import { INode, INodeWrapper } from '~~/types/core'

export const setChildren =
    (newVal: (INode | undefined)[], lvl: number, current: number):
    (INodeWrapper | undefined)[] =>
      Object.assign(
        [],
        (newVal && newVal.length && newVal.map((child, index) => ({
          ...child,
          style: {
            transform: useMove(index),
            opacity: +(lvl === current),
            visibility: lvl !== current ? 'hidden' : 'visible',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: lvl - 1
          } as CSSProperties
        } as INodeWrapper
        ))) || []
      )
