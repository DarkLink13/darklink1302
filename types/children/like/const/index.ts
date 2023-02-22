import { INode } from '../../../core'

export const Like: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Likes' },
    icon: { key: 'icon-park-outline:like' },
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
