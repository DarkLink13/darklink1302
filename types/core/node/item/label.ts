import { NodeItemLabelType } from './label/type'

export interface INodeItemLabel {
  name: string
  type?: NodeItemLabelType,
  size?: string
  color?: string
  bottom?: string
}
