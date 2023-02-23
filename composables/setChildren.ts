import { CSSProperties } from 'vue'
import { INode } from '~~/types/core'

export const setChildren =
    (newVal: (INode | undefined)[], lvl: number, current: number):
    (INode | undefined)[] =>
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
        } as INode
        ))) || []
      )
