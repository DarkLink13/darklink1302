import { INode } from '~~/types/core'

export const FronEndDev: INode = new CNode({
  item: {
    type: NodeItemType.Position,
    label: { name: 'Front-End Developer' },
    icon: { key: 'mdi:code-tags' },
    colors: { primary: '#146487', secondary: '#2e9fd4', hover: '#8096a7' }
  }
})
