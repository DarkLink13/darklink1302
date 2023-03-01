import { INode } from '../../../core'
import { Mode } from '../mode'

export const Info: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Info' },
    icon: { key: 'material-symbols:info-outline-rounded' },
    colors: {
      primary: '#604c08',
      secondary: '#7b661c',
      hover: '#95813c'
    }
  },
  children: [Mode]
}
