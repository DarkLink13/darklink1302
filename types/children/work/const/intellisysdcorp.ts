import { INode } from '~~/types/core'

export const IntellisysDCorp: INode = {
  item: {
    id: 'intellisysdcorp',
    type: NodeItemType.Work,
    label: { value: 'Intellisys D Corp', type: NodeItemLabelType.Link, subvalue: 'https://intellisysdcorp.com/' },
    sublabels: [
      { value: '2021-06', type: NodeItemLabelType.Since },
      { value: 'dr', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Hybrid, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }
    ],
    colors: { primary: '#73abb3', secondary: '#cfd252', hover: '#f7f7f7' },
    background: { src: '/assets/img/intellisys.png' }
  },
  children: [
    {
      item: {
        id: 'vacunaterd',
        type: NodeItemType.Project,
        label: { value: 'VacunateRD', type: NodeItemLabelType.Link, subvalue: 'https://solicitud.vacunate.gob.do/' },
        background: { src: '/assets/img/vacunaterd.png' },
        colors: { primary: '#061e57', secondary: '#e30f1f', hover: '#f2f2f2' }
      },
      children: [
        {
          ...BackEnd,
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
