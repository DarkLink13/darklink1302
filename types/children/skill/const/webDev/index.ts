import { INode } from '~~/types/core'
export * from './frameworks'
export const WebDev: INode = new CNode({
  item: { label: { name: 'Web Developer' }, type: NodeItemType.Position }

})
