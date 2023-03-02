import { INode } from '../../../core'
import { Language } from '../lang'
import { Mode } from '../mode'

export const Info: INode = {
  item: {
    id: 'info',
    type: NodeItemType.Root,
    icon: { key: 'material-symbols:info-outline-rounded' },
    colors: {
      primary: '#604c08',
      secondary: '#7b661c',
      hover: '#95813c'
    }
  },
  children: [undefined, Mode, undefined, undefined, undefined, Language]
}
