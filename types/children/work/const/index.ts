import { INode } from '~~/types/core'

export const Work: INode = {
  item: {
    id: 'work',
    type: NodeItemType.Root,
    icon: {
      key: 'material-symbols:work-outline'
    },
    colors: {
      primary: '#002c71',
      secondary: '#1a4a97',
      hover: '#244f93'
    }
  },
  children: [
    UCI,
    CopSonic,
    AugeTec,
    Cubacitas,
    IntellisysDCorp,
    OpsecSecurity,
    Payever
  ]
}
