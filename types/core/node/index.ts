import { CSSProperties } from 'vue'
import { INodeItem } from './item'

export * from './item'

export interface INode {
  item: INodeItem
  style?: CSSProperties
  children?: (INode | undefined)[]
}
