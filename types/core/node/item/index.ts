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
  sublabels?: INodeItemLabel[]
  exp?: number
  type: NodeItemType
  style?: CSSProperties
  details?: NodeItemDetails
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
}
