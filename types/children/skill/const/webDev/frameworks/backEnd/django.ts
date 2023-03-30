import { INode, INodeItem } from '~~/types/core'

export const IDjango: INodeItem = {
  label: { value: 'Django' },
  id: 'django',
  exp: 70,
  sublabels: [{ value: '3', type: NodeItemLabelType.Years }, { value: '2,3', type: NodeItemLabelType.Version }],
  type: NodeItemType.Skill,
  background: { src: '/assets/img/django.png' },
  colors: { primary: '#0a2f20', secondary: '#356357', hover: '#a2d9a9' }
}

export const Django: INode = {
  item: IDjango,
  children: [Python]
}
export const DjangoRestFramework: INode = {
  item: {
    id: 'djangorestframework',
    type: NodeItemType.Skill,
    exp: 70,
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }, { value: '2,3', type: NodeItemLabelType.Version }],
    label: { value: 'Django Rest Framework' },
    background: { src: '/assets/img/djangorestframework.png' },
    colors: { primary: '#2c2c2c', secondary: '#7f2d2d', hover: '#d7d7d7' }
  }
}
export const Pandas: INode = {
  item: {
    id: 'pandas',
    type: NodeItemType.Skill,
    exp: 30,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }, { value: '1', type: NodeItemLabelType.Version }],
    label: { value: 'Pandas' },
    background: { src: '/assets/img/pandas.png' },
    colors: { primary: '#130754', secondary: '#e70488', hover: '#ffca00' }
  }
}
