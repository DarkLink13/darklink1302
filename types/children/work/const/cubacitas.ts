import { INode } from '~~/types/core'

export const Cubacitas: INode = new CNode({
  item: {
    type: NodeItemType.Work,
    label: { name: 'Cubacitas' },
    background: { src: '/assets/cubacitas.png', ...BackgroundDefault },
    colors: { primary: '#fe4860', secondary: '#ff8548', hover: '#ffa542' }
  },
  children: [
    {
      item: { type: NodeItemType.Work, label: { name: 'Cubacitas Web' } },
      children: [
        {
          ...FronEndDev,
          children: [Angular2]
        }
      ]
    }
  ]
})
