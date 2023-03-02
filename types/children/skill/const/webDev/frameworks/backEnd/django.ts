import { INode, INodeItem } from '~~/types/core'

export const IDjango: INodeItem = {
  label: { name: 'Django' },
  id: 'django',
  type: NodeItemType.Skill,
  background: { src: '/assets/img/django.png' },
  colors: { primary: '#0a2f20', secondary: '#356357', hover: '#a2d9a9' }
}

export const Django: INode = {
  item: IDjango
}
export const DjangoRestFramework: INode = {
  item: {
    id: 'djangorestframework',
    type: NodeItemType.Skill,
    label: { name: 'Django Rest Framework' },
    background: { src: '/assets/img/djangorestframework.png' },
    colors: { primary: '#2c2c2c', secondary: '#7f2d2d', hover: '#d7d7d7' }
  }
}
export const Pandas: INode = {
  item: {
    id: 'pandas',
    type: NodeItemType.Skill,
    label: { name: 'Pandas' },
    background: { src: '/assets/img/pandas.png' },
    colors: { primary: '#130754', secondary: '#e70488', hover: '#ffca00' }
  }
}
