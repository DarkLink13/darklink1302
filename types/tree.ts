import { INode } from './core'

export const Tree: INode =
  {
    item: {
      type: NodeItemType.Default,
      style: {},
      label: {
        name: 'darklink',
        bottom: '70%'
      },
      background: { src: '/assets/avatar.jpg' },
      colors: {
        primary: '#2ac7ec',
        secondary: '#f0e5b1',
        hover: 'white'
      }
    },
    style: {},
    children: [
      Work,
      Skill,
      Like,
      Contact,
      Info,
      Certification
    ]
  }
