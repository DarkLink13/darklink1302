import { INode } from '~~/types/core'

export const IntellisysDCorp: INode = {
  item: {
    id: 'intellisysdcorp',
    type: NodeItemType.Work,
    label: { value: 'Intellisys D Corp', type: NodeItemLabelType.Link, subvalue: 'https://intellisysdcorp.com/' },
    sublabels: [
      { value: '2021-02', type: NodeItemLabelType.Since },
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
        sublabels: [
          { value: '2021-02,2020-06', type: NodeItemLabelType.Date },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.Flexible, type: NodeItemLabelType.WorkType },
          { value: 'dr', type: NodeItemLabelType.Country }
        ],
        label: { value: 'VacunateRD', type: NodeItemLabelType.Link, subvalue: 'https://solicitud.vacunate.gob.do/' },
        background: { src: '/assets/img/vacunaterd.png' },
        colors: { primary: '#061e57', secondary: '#e30f1f', hover: '#f2f2f2' }
      },
      children: [
        {
          item: {
            ...BackEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: NodeItemLabelRole.TeamLead, type: NodeItemLabelType.Role },
              { value: '2020-01,2020-07', type: NodeItemLabelType.Date }
            ]
          },
          children: [NodeJS, PostgreSQL, ExpressJS, NestJS]
        },
        {
          item: {
            ...DevOps.item,
            sublabels: [
              { value: NodeItemLabelRole.Collaborator, type: NodeItemLabelType.Role },
              { value: NodeItemLabelRole.MainArchitect, type: NodeItemLabelType.Role },
              { value: '2020-01,2020-07', type: NodeItemLabelType.Date }
            ]
          },
          children: [GCP]
        }
      ]
    }
  ]
}
