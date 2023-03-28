import { Jenkis } from '../../skill/const/softwareEngineer'
import { INode } from '~~/types/core'

export const UCI: INode = {
  item: {
    id: 'uci',
    type: NodeItemType.Work,
    label: { type: NodeItemLabelType.Link, subvalue: 'https://www.uci.cu' },
    sublabels: [
      { value: '2018-09,2022-01', type: NodeItemLabelType.Date },
      { value: 'cu', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Hybrid, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }
    ],
    colors: { primary: '#05235e', secondary: '#2c4e9a', hover: '#2c59e6' },
    background: { src: '/assets/img/uci.png' }
  },
  children: [
    {
      item: {
        id: 'apklis',
        type: NodeItemType.Project,
        label: { value: 'APKlis', subvalue: 'https://www.apklis.cu', type: NodeItemLabelType.Link },
        sublabels: [{ value: '2018-09,2022-01', type: NodeItemLabelType.Date }],
        background: { src: '/assets/img/apklis.png' },
        colors: { primary: '#f15323', secondary: '#ec9107', hover: '#f0e108' }
      },
      children: [
        undefined,
        {
          item: {
            ...FrontEnd.item,
            id: 'juniorfrontend',
            sublabels: [
              { value: NodeItemLabelRole.Junior, type: NodeItemLabelType.Role },
              { value: '2018-09,2020-01', type: NodeItemLabelType.Date },
              { value: NodeItemLabelWorkType.OnSite, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }

            ]
          },
          children: [
            {
              item: {
                ...Angular2.item,
                sublabels: [{ value: '6-8', type: NodeItemLabelType.Version }, { value: '1', type: NodeItemLabelType.Years }]
              },
              children: [{ item: { ...AngularMaterial.item, sublabels: [{ value: '6-8', type: NodeItemLabelType.Version }, { value: '3', type: NodeItemLabelType.Years }] } }]
            },
            undefined,
            {
              item: {
                ...AngularJS.item,
                sublabels: [{ value: '1', type: NodeItemLabelType.Version }, { value: '<1', type: NodeItemLabelType.Years }]
              }
            },
            undefined,
            {
              item: { ...VueJS.item, sublabels: [{ value: '1', type: NodeItemLabelType.Version }, { value: '1', type: NodeItemLabelType.Years }] },
              children: [
                IViewUI
              ]
            }
          ]
        },
        {
          item: {
            ...FullStack.item,
            exp: 65,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: NodeItemLabelRole.TeamLead, type: NodeItemLabelType.Role },
              { value: NodeItemLabelRole.MainArchitect, type: NodeItemLabelType.Role },
              { value: NodeItemLabelWorkType.Hybrid, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType },
              { value: '2020-01,2021-10', type: NodeItemLabelType.Date }
            ]
          },
          children: [
            {
              item: IDjango,
              children: [undefined, DjangoRestFramework, undefined, undefined, undefined, Pandas]
            }, PostgreSQL, Redis, ElasticSearch,
            {
              item: {
                ...Angular2.item,
                sublabels: [{ value: '6-10', type: NodeItemLabelType.Version }, { value: '3', type: NodeItemLabelType.Years }]
              },
              children: [{ item: { ...AngularMaterial.item, sublabels: [{ value: '6-10', type: NodeItemLabelType.Version }, { value: '3', type: NodeItemLabelType.Years }] } }]
            },
            {
              item: {
                ...AngularJS.item,
                sublabels: [{ value: '1', type: NodeItemLabelType.Version }, { value: '<1', type: NodeItemLabelType.Years }]
              }
            }]
        },
        undefined,
        {
          item: {
            ...DevOps.item,
            label: { value: 'DevOps' },
            exp: 20,
            sublabels: [
              { value: NodeItemLabelRole.Collaborator, type: NodeItemLabelType.Role },
              { value: NodeItemLabelWorkType.Hybrid, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType },
              { value: '2020-03,2021-10', type: NodeItemLabelType.Date }
            ]
          },
          children: [Linux, GitLab, Git, Jenkis]
        },
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: '2021-09,2022-01', type: NodeItemLabelType.Date },
              { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
            ]
          },
          children: [
            {
              item: { ...Nuxt.item, sublabels: [{ value: '2', type: NodeItemLabelType.Version }, { value: '1', type: NodeItemLabelType.Years }] },
              children: [
                undefined,
                VueJS,
                undefined,
                undefined,
                undefined,
                Vuetify
              ]
            }
          ]
        }

      ]
    }
  ]
}
