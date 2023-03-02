import { INode } from '~~/types/core'

export const En: INode = {
  item: {
    id: 'en',
    type: NodeItemType.Root,
    icon: { key: 'emojione-monotone:flag-for-united-kingdom' },
    colors: {
      primary: '#ed4c5c',
      secondary: '#2a5f9e',
      hover: '#cdb5b9'
    },
    action: (setLocale: (param: string) => any) => { setLocale('en') }
  }
}
