import { CSSProperties } from 'vue'
import { IBackground } from '../../background'
import { IIcon } from '../../icon'
import { INodeItemColor } from './color'
import { NodeItemDetails } from './detail'
import { INodeItemLabel } from './label'
import { NodeItemType } from './type'
export * from './type'
export * from './color/glow'

export interface INodeItem {
  label: INodeItemLabel
  type: NodeItemType
  details?: NodeItemDetails
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
}
export interface INodeItemWrapper {
  style: CSSProperties
  type: NodeItemType
  details?: NodeItemDetails
  label: INodeItemLabel
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
}
export class CNodeItem implements INodeItem {
  type!: NodeItemType
  label!: INodeItemLabel
  details?: NodeItemDetails
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
  constructor (item: INodeItem) {
    this.type = item.type
    this.label = item.label
    this.background = item.background
    this.colors = item.colors
    this.details = item.details
    this.icon = item.icon
    this.description = item.description
  }
}
