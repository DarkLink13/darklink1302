import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const Angular2: INode = {
  item: {
    id: 'angular2',
    exp: 60,
    type: NodeItemType.Skill,
    label: { value: 'Angular 2+' },
    sublabels: [{ name: '4', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/angular2.png' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}

export const Nx: INode = {
  item: {
    id: 'nx',
    exp: 50,
    label: { value: 'Nx' },
    type: NodeItemType.Skill,
    sublabels: [{ name: '2', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/nx.png' },
    colors: { primary: '#002f56', secondary: '#48c4e5', hover: '#96d8e9' }
  }
}
