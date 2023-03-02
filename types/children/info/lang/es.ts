import { INode } from '~~/types/core'

export const Es: INode = {
  item: {
    id: 'es',
    type: NodeItemType.Root,
    icon: { key: 'emojione-monotone:flag-for-spain' },
    colors: {
      primary: '#ffce31',
      secondary: '#ed4c5c',
      hover: '#ffffff'
    },
    action: (setLocale: (param: string) => any) => { setLocale('es') }
  }
}
