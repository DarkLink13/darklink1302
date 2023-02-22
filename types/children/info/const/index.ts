import { INode } from '../../../core'

export const Info: INode = new CNode({
  item: {
    type: NodeItemType.Root,
    label: { name: 'Info' },
    icon: { key: 'material-symbols:info-outline-rounded' },
    colors: {
      primary: '#604c08',
      secondary: '#7b661c',
      hover: '#95813c'
    }
  }
})
