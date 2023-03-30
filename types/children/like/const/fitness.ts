import { INode } from '../../../core'

export const LikeFitness: INode = {
  item: {
    id: 'fitness',
    type: NodeItemType.Like,
    icon: { key: 'material-symbols:fitness-center' },
    colors: {
      primary: '#920118',
      secondary: '#b60000',
      hover: '#f76464'
    }
  }
}
