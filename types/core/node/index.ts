import { CSSProperties } from 'vue'
import { INodeItem } from './item'

export * from './item'

export interface INode {
  item: INodeItem
  children?: (INode | undefined)[]
}
export interface INodeWrapper {
  item?: INodeItem
  style: CSSProperties
  children?: (INodeWrapper | undefined)[]
}
