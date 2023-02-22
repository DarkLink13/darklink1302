import { INode } from '~~/types/core'

export const IntellisysDCorp: INode = new CNode({
  item: {
    type: NodeItemType.Work,
    label: { name: 'Intellisys D Corp' },
    colors: { primary: '#73abb3', secondary: '#cfd252', hover: '#f7f7f7' },
    background: { src: '/assets/intellisys.png', ...BackgroundDefault }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'VacunateRD' },
        background: { src: '/assets/vacunaterd.png', ...BackgroundDefault },
        colors: { primary: '#061e57', secondary: '#e30f1f', hover: '#f2f2f2' }
      },
      children: [
        {
          ...BackEndDev,
          children: [NodeJS, PostgreSQL, ExpressJS, NestJS]
        },
        {
          ...DevOps,
          children: [GCP]
        }
      ]
    }
  ]
})
