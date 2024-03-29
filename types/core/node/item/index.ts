import { CSSProperties } from 'vue'
import { IBackground } from '../../background'
import { IIcon } from '../../icon'
import { INodeItemColor } from './color'
import { NodeItemDetails } from './detail'
import { INodeItemLabel } from './label'
import { NodeItemType } from './type'
export * from './type'
export * from './label'
export * from './color/glow'

export interface INodeItem {
  id: string
  label?: INodeItemLabel
  sublabels?: INodeItemLabel[]
  exp?: number
  type: NodeItemType
  style?: CSSProperties
  details?: NodeItemDetails
  icon?: IIcon
  description?: string
  background?: IBackground
  colors?: INodeItemColor
  mode?: 'dark' | 'light'
  action?: (params: any) => void
}
