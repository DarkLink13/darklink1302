import { SoftwareEngineer } from '../position/const/softwareEngineer'
import { AngularJS } from '../../skill'
import { INode } from '~~/types/core'

export const CopSonic: INode = {
  item: {
    id: 'copsonic',
    type: NodeItemType.Work,
    label: { value: 'CopSonic', type: NodeItemLabelType.Link, subvalue: 'https://www.copsonic.com/' },
    sublabels: [
      { value: '2020-07,2020-11', type: NodeItemLabelType.Date },
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
          { value: '2020-08,2020-09', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/copsonic.png' }
      },
      children: [SoftwareEngineer]
    },
    undefined, {
      item: {
        id: 'sonicqrcode',
        type: NodeItemType.Project,
        label: { value: 'SonicQRCode' },
        colors: { primary: '#e8960f', secondary: '#f7d800', hover: '#f7e771' },
        sublabels: [
          { value: '2020-08,2020-09', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/sonicqrcode.png' }
      },
      children: [SoftwareEngineer]
    }, undefined,
    {
      item: {
        id: 'sharebill',
        type: NodeItemType.Project,
        label: { value: 'ShareBill' },
        colors: { primary: '#00134d', secondary: '#777777', hover: '#d4d6d4' },
        sublabels: [
          { value: '2020-09,2020-11', type: NodeItemLabelType.Date },
          { value: 'fr', type: NodeItemLabelType.Country },
          { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
        ],
        background: { src: '/assets/img/sharebill.png' }
      },
      children: [SoftwareEngineer, { item: FrontEndDev.item, children: [AngularJS, NodeJS] }]
    }
  ]
}
