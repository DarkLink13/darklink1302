import { INode } from '~~/types/core'

export const Angular2: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Angular 2+' },
    background: { src: '/assets/angular2.png', ...IconDefault },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}

export const Nx: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Nx' },
    background: { src: '/assets/nx.png', ...IconDefault },
    colors: { primary: '#002f56', secondary: '#48c4e5', hover: '#96d8e9' }
  }
}
