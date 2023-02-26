import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const Angular2: INode = {
  item: {
    exp: 60,
    type: NodeItemType.Skill,
    label: { name: 'Angular 2+' },
    sublabels: [{ name: '2018-10', type: NodeItemLabelType.Since }],
    background: { src: '/assets/angular2.png' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}

export const Nx: INode = {
  item: {
    exp: 30,
    label: { name: 'Nx' },
    type: NodeItemType.Skill,
    sublabels: [{ name: '2018-10', type: NodeItemLabelType.Since }],
    background: { src: '/assets/nx.png' },
    colors: { primary: '#002f56', secondary: '#48c4e5', hover: '#96d8e9' }
  }
}
