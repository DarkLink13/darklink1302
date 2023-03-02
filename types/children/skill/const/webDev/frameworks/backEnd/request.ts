import { INode } from '~~/types/core'

export const GraphQL: INode = {
  item: {
    id: 'graphql',
    type: NodeItemType.Skill,
    label: { name: 'GraphQL' },
    background: { src: '/assets/img/graphql.png' },
    colors: { primary: '#d5007c', secondary: '#d932a2', hover: '#c2c2c2' }
  }
}
export const Apollo: INode = {
  item: {
    id: 'apollo',
    type: NodeItemType.Skill,
    label: { name: 'Apollo' },
    background: { src: '/assets/img/apollo.png' },
    colors: { primary: '#303134', secondary: '#56595d', hover: '#FFFFFF' }
  }
}
