import { INode } from '~~/types/core'

export const OpsecSecurity: INode = new CNode({
  item: {
    type: NodeItemType.Work,
    label: { name: 'Opsec Security' },
    background: { src: '/assets/opsecsecurity.png', ...BackgroundDefault },
    colors: { primary: '#2b145e', secondary: '#54329d', hover: '#6742b7' }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'Insight' },
        background: { src: '/assets/opsecsecurity.png', ...BackgroundDefault },
        colors: { primary: '#181e41', secondary: '#003b78', hover: '#3d6292' }
      },
      children: [
        {
          ...FullStackDev,
          children: [DotNet, KnockoutJS]
        }
      ]
    },
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'eRE' },
        background: { src: '/assets/ere.png', ...BackgroundDefault },
        colors: { primary: '#000000', secondary: '#faec17', hover: '#FFFFFF' }
      },
      children: [
        {
          ...FullStackDev,
          children: [DotNet, React]
        }
      ]
    }
  ]
})
