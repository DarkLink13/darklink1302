import {  INode } from '~~/types/core'

export const GraphQL: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'GraphQL' },
    background: { src: '/assets/graphql.png', ...IconDefault },
    colors: { primary: '#d5007c', secondary: '#d932a2', hover: '#c2c2c2' }
  }
}
export const Apollo: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'Apollo' },
    background: { src: '/assets/apollo.png', ...IconDefault },
    colors: { primary: '#303134', secondary: '#56595d', hover: '#FFFFFF' }
  }
}
