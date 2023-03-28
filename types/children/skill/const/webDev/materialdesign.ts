import { INode } from '~~/types/core'

export const MaterialDesign: INode = {
  item: {
    id: 'materialdesign',
    type: NodeItemType.Skill,
    label: { value: 'Material Design' },
    background: { src: '/assets/img/materialdesign.png' },
    colors: { primary: '#828282', secondary: '#999999', hover: '#c3c3c3' }
  }
}
