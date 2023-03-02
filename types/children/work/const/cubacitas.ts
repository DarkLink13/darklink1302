import { INode } from '~~/types/core'

export const Cubacitas: INode = {
  item: {
    id: 'cubacitas',
    type: NodeItemType.Work,
    label: { name: 'Cubacitas' },
    background: { src: '/assets/img/cubacitas.png' },
    colors: { primary: '#fe4860', secondary: '#ff8548', hover: '#ffa542' }
  },
  children: [
    {
      item: { id: 'cubacitasweb', type: NodeItemType.Work, label: { name: 'Cubacitas Web' } },
      children: [
        {
          ...FrontEndDev,
          children: [Angular2]
        }
      ]
    }
  ]
}
