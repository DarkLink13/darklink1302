import { INode } from '~~/types/core'

export const CopSonic: INode = new CNode({
  item: {
    type: NodeItemType.Work,
    label: { name: 'CopSonic' },
    background: { src: '/assets/copsonic.png', ...BackgroundDefault },
    colors: { primary: '#a62831', secondary: '#c01925', hover: '#c6c8c7' }
  }
})
