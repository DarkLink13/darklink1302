import { INodeItemColorGlow } from './color/glow/interface'

export interface INodeItemColor {
  primary?: string
  secondary?: string
  hover?: string
  glow?: INodeItemColorGlow[]
}
