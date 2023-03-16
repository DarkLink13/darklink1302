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
        {
          item: { ...FrontEndDev.item, sublabels: [{ value: '2018-09,2022-01', type: NodeItemLabelType.Date }] },
          children: [
            undefined,
            {
              item: {
                ...Angular2.item,
                sublabels: [{ value: '6-10', type: NodeItemLabelType.Version }, { value: '3', type: NodeItemLabelType.Years }]
              }
            },
            undefined,
            undefined,
            undefined,
            {
              item: { ...VueJS.item, sublabels: [{ value: '1,2', type: NodeItemLabelType.Version }, { value: '1', type: NodeItemLabelType.Years }] },
              children: [
                IViewUI,
                undefined,
                Nuxt,
                undefined,
                Vuetify
              ]
            }
          ]
        },
        undefined,
        {
          item: { ...BackEndDev.item, exp: 65, sublabels: [{ value: '2020-01,2021-10', type: NodeItemLabelType.Date }] },
          children: [undefined,
            {
              item: IDjango,
              children: [undefined, DjangoRestFramework, undefined, undefined, undefined, Pandas]
            }, PostgreSQL, undefined, Redis, ElasticSearch]
        },
        undefined,
        { item: { ...DevOps.item, label: { value: 'DevOps Collaborator' }, exp: 20, sublabels: [{ value: '2020-03,2021-10', type: NodeItemLabelType.Date }] } }
      ]
    }
  ]
}
