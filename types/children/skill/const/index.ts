import { INode } from '~~/types/core'

export * from './algorithmDev'
export * from './graphicDesigner'
export * from './webDev'

export const Skill: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Skills' },
    icon: {
      key: 'carbon:skill-level'
    },
    colors: {
      primary: '#281b62',
      secondary: '#403084',
      hover: '#5a48b5'
    }
  },
  children: [
    WebDev,
    AlgorithmDev,
    GraphicDesigner
  ]
}
