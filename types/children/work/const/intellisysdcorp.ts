import { INode } from '~~/types/core'

export const IntellisysDCorp: INode = {
  item: {
    type: NodeItemType.Work,
    label: { name: 'Intellisys D Corp' },
    colors: { primary: '#73abb3', secondary: '#cfd252', hover: '#f7f7f7' },
    background: { src: '/assets/img/intellisys.png' }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'VacunateRD' },
        background: { src: '/assets/img/vacunaterd.png' },
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
}
