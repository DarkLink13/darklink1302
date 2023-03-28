import { INode } from '~~/types/core'
export * from './frameworks'
export * from './ssr'
export * from './materialdesign'

export const WebDev: INode = {
  item: { id: 'webdev', label: { value: 'Web Developer' }, type: NodeItemType.Position }
}
