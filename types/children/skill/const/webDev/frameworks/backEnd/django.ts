import { INode, INodeItem } from '~~/types/core'

export const IDjango: INodeItem = {
  label: { name: 'Django' },
  type: NodeItemType.Skill,
  background: { src: '/assets/django.png', ...IconDefault },
  colors: { primary: '#0a2f20', secondary: '#356357', hover: '#a2d9a9' }
}

export const Django: INode = {
  item: IDjango
}
export const DjangoRestFramework: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'DjangoRestFramework' },
    background: { src: '/assets/djangorestframework.png', ...IconDefault },
    colors: { primary: '#2c2c2c', secondary: '#7f2d2d', hover: '#d7d7d7' }
  }
}
export const Pandas: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'Pandas' },
    background: { src: '/assets/pandas.png', ...IconDefault },
    colors: { primary: '#130754', secondary: '#e70488', hover: '#ffca00' }
  }
}
