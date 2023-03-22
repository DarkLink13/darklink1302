import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const Angular2: INode = {
  item: {
    id: 'angular2',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'Angular 2+' },
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/angular2.png' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}
export const AngularJS: INode = {
  item: {
    id: 'angularjs',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'AngularJS' },
    sublabels: [{ value: '<1', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/angularjs.png' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#b3b3b3' }
  }
}
export const AngularMaterial: INode = {
  item: {
    id: 'angularmaterial',
    exp: 70,
    type: NodeItemType.Skill,
    label: { value: 'Angular Material' },
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/angularmaterial.png' },
    colors: { primary: '#313f8d', secondary: '#3f51b5', hover: '#6270c2' }
  }
}

export const Nx: INode = {
  item: {
    id: 'nx',
    exp: 50,
    label: { value: 'Nx' },
    type: NodeItemType.Skill,
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/nx.png' },
    colors: { primary: '#002f56', secondary: '#48c4e5', hover: '#96d8e9' }
  }
}
