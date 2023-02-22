import { INode } from '~~/types/core'

export const NodeJS: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'NodeJS' },
    background: { src: '/assets/nodejs.png', ...IconDefault },
    colors: { primary: '#313131', secondary: '#4e8e49', hover: '#78c839' }
  }
}
export const ExpressJS: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'ExpressJS' },
    background: { src: '/assets/expressjs.png', ...IconDefault },
    colors: { hover: '#FFFFFF' }
  }
}
export const NestJS: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'NestJS' },
    background: { src: '/assets/nestjs.png', ...IconDefault },
    colors: { primary: '#a50101', secondary: '#d13e66', hover: '#e66161' }
  }
}

export const Hasura: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'Hasura' },
    background: { src: '/assets/hasura.png', ...IconDefault },
    colors: { primary: '#0f2750', secondary: '#0c5292', hover: '#1eb4d4' }
  }
}
