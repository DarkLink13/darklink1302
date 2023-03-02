import { INode } from '../../../core'

export const Like: INode = {
  item: {
    id: 'like',
    type: NodeItemType.Root,
    icon: { key: 'ph:heart-bold' },
    colors: {
      primary: '#6d1414',
      secondary: '#952727',
      hover: '#bb4141'
    }
  },
  children: [
    LikeProgramming,
    LikeGaming,
    LikeFitness,
    LikeSoccer,
    LikeMusic,
    LikePainting
  ]
}
