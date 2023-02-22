import { INode } from '~~/types/core'

export const FullStackDev: INode = new CNode({
  item: {
    type: NodeItemType.Position,
    label: { name: 'Full-Stack Developer' },
    icon: { key: 'ion:code-working' },
    colors: { primary: '#043a32', secondary: '#01450f', hover: '#1aa177' }
  }
})
