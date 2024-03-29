import { INode } from '~~/types/core'

export const NodeJS: INode = {
  item: {
    id: 'nodejs',
    exp: 85,
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }, { value: '12-18', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'NodeJS' },
    background: { src: '/assets/img/nodejs.png' },
    colors: { primary: '#313131', secondary: '#4e8e49', hover: '#78c839' }
  },
  children: [Javascript, Typescript]
}
export const ExpressJS: INode = {
  item: {
    id: 'expressjs',
    exp: 60,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }, { value: '4.17', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'ExpressJS' },
    background: { src: '/assets/img/expressjs.png' },
    colors: { hover: '#FFFFFF' }
  },
  children: [NodeJS]
}
export const NestJS: INode = {
  item: {
    id: 'nestjs',
    exp: 75,
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }, { value: '7.3-9.3', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'NestJS' },
    background: { src: '/assets/img/nestjs.png' },
    colors: { primary: '#a50101', secondary: '#d13e66', hover: '#e66161' }
  },
  children: [NodeJS, Apollo, GraphQL]
}

export const Hasura: INode = {
  item: {
    id: 'hasura',
    exp: 60,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }, { value: '1', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'Hasura' },
    background: { src: '/assets/img/hasura.png' },
    colors: { primary: '#0f2750', secondary: '#0c5292', hover: '#1eb4d4' }
  },
  children: [NodeJS, GraphQL]
}
