import { INode } from '~~/types/core'

export const Payever:INode = {
  item: {
    type: NodeItemType.Work,
    label: { name: 'payever' },
    background: { src: '/assets/payever.png', ...BackgroundDefault },
    colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'Commerceos' },
        background: { src: '/assets/commerceos.png', ...BackgroundDefault },
        colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
      },
      children: [
        {
          ...FronEndDev,
          children: [Angular2, Nx]
        }
      ]
    }
  ]
}
