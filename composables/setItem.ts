import { CSSProperties } from 'vue'
import { INodeItem, INodeItemWrapper } from '~~/types/core'

export const setItem =
    (newVal: INodeItem, lvl: number, current: number):
    INodeItemWrapper =>
      Object.assign(
        {},
        {
          ...newVal,
          style: {
            width: '90%',
            height: '90%',
            // width: lvl === current ? '90%' : '100%',
            // height: lvl === current ? '100%' : '100%',
            position: 'relative'
          } as CSSProperties
        }
      )
