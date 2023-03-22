import { AngularJS } from '../../skill'
import { CSS } from '../../skill/const/languages'
import { INode } from '~~/types/core'

export const CopSonic: INode = {
  item: {
    id: 'copsonic',
    type: NodeItemType.Work,
    label: { value: 'CopSonic', type: NodeItemLabelType.Link, subvalue: 'https://www.copsonic.com/' },
    sublabels: [
      { value: '2019-07,2019-11', type: NodeItemLabelType.Date },
      { value: 'fr', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
    ],
    background: { src: '/assets/img/copsonic.png' },
    colors: { primary: '#a62831', secondary: '#c01925', hover: '#c6c8c7' }
  },
  children: [
    undefined,
    {
      item: {
        id: 'sdk',
        type: NodeItemType.Project,
        label: { value: 'Copsonic SDK' },
        colors: { primary: '#a62831', secondary: '#c01925', hover: '#c6c8c7' },
        sublabels: [
          { value: '2019-07,2019-08', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/copsonic.png' }
      },
      children: [{
        item: {
          ...SoftwareEngineer.item,
          sublabels: [
            { value: NodeItemLabelRole.Junior, type: NodeItemLabelType.Role },
            { value: '2019-07,2019-08', type: NodeItemLabelType.Date }
          ]
        }
      }]
    },
    undefined, {
      item: {
        id: 'sonicqrcode',
        type: NodeItemType.Project,
        label: { value: 'SonicQRCode', type: NodeItemLabelType.Link, subvalue: 'https://sonicqrcode.copsonic.com/' },
        colors: { primary: '#e8960f', secondary: '#f7d800', hover: '#f7e771' },
        sublabels: [
          { value: '2019-08,2019-09', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/sonicqrcode.png' }
      },
      children: [{
        item: {
          ...SoftwareEngineer.item,
          sublabels: [
            { value: NodeItemLabelRole.Junior, type: NodeItemLabelType.Role },
            { value: '2019-08,2019-09', type: NodeItemLabelType.Date }
          ]
        }
      }]
    }, undefined,
    {
      item: {
        id: 'sharebill',
        type: NodeItemType.Project,
        label: { value: 'ShareBill Demo' },
        colors: { primary: '#00134d', secondary: '#777777', hover: '#d4d6d4' },
        sublabels: [
          { value: '2019-09,2019-11', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/sharebill.png' }
      },
      children: [
        {
          item: {
            ...SoftwareEngineer.item,
            sublabels: [
              { value: NodeItemLabelRole.Junior, type: NodeItemLabelType.Role },
              { value: '2019-09,2019-10', type: NodeItemLabelType.Date }
            ]
          }
        },
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Junior, type: NodeItemLabelType.Role },
              { value: '2019-10,2019-11', type: NodeItemLabelType.Date }
            ]
          },
          children: [AngularJS, NodeJS, CSS, HTML, Javascript]
        }
      ]
    }
  ]
}
