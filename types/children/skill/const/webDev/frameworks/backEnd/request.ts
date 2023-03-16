import { INode } from '~~/types/core'

export const GraphQL: INode = {
  item: {
    id: 'graphql',
    exp: 90,
    sublabels: [{ name: '3', type: NodeItemLabelType.Years }],
    type: NodeItemType.Skill,
    label: { value: 'GraphQL' },
    background: { src: '/assets/img/graphql.png' },
    colors: { primary: '#d5007c', secondary: '#d932a2', hover: '#c2c2c2' }
  }
}
export const Apollo: INode = {
  item: {
    id: 'apollo',
    exp: 85,
    sublabels: [{ name: '3', type: NodeItemLabelType.Years }],
    type: NodeItemType.Skill,
    label: { value: 'Apollo' },
    background: { src: '/assets/img/apollo.png' },
    colors: { primary: '#303134', secondary: '#56595d', hover: '#FFFFFF' }
  }
}
