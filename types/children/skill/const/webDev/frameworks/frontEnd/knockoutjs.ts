import { INode } from '~~/types/core'

export const KnockoutJS: INode = new CNode({
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Knockout.JS' },
    background: { src: '/assets/knockoutjs.png', ...IconDefault },
    colors: { primary: '#9a1015', secondary: '#d72f23', hover: '#e65231' }
  }
})
