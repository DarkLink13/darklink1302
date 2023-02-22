import { CSSProperties } from 'vue'
import { CNodeItem, INodeItem } from './item'

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

export class CNode implements INode {
  item!: CNodeItem
  // eslint-disable-next-line no-use-before-define
  children?: (CNode | undefined)[] | undefined

  constructor (node: INode) {
    this.item = node.item
    this.children = node.children
  }
}
