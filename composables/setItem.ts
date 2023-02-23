import { CSSProperties } from 'vue'
import { INodeItem } from '~~/types/core'

export const setItem =
    (newVal: INodeItem):
    INodeItem =>
      Object.assign(
        {},
        {
          ...newVal,
          style: {
            width: '90%',
            height: '90%',
            position: 'relative'
          } as CSSProperties
        }
      )
