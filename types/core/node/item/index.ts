import { IBackground } from '../../background'
import { IIcon } from '../../icon'
import { INodeItemColor } from './color'
import { NodeItemDetails } from './detail'
import { INodeItemLabel } from './label'
import { NodeItemType } from './type'

export * from './type'
export * from './color/glow'

export interface INodeItem {
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
  details?: NodeItemDetails
  label!: INodeItemLabel
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
}
