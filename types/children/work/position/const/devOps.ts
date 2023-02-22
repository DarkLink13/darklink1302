import { INode } from '~~/types/core'

export const DevOps: INode = new CNode({
  item: {
    type: NodeItemType.Position,
    label: { name: 'DevOps' },
    icon: { key: 'grommet-icons:console' },
    colors: { primary: '#055451', secondary: '#086519', hover: '#25b585' }
  }
})
