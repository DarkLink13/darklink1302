import { En } from './en'
import { Es } from './es'
import { INode } from '~~/types/core'

export const Language: INode = {
  item: {
    id: 'language',
    type: NodeItemType.Root,
    icon: { key: 'ion:language' },
    colors: {
      primary: '#cdb5b9',
      secondary: '#9075af',
      hover: '#cdb5b9'
    }
  },
  children: [undefined, En, undefined, undefined, undefined, Es]
}
