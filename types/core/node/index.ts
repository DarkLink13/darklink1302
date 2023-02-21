import { INodeItem } from './item'

export * from './item'

export interface INode {
  item: INodeItem
  children?: (INode | undefined)[]
}

export class CNode implements INode {
  item!: INodeItem
}
