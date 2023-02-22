import { INode } from '~~/types/core'

export const Work: INode = new CNode({
  item: {
    type: NodeItemType.Root,
    label: { name: 'Works' },
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
    OpsecSecurity,
    CopSonic,
    Cubacitas,
    IntellisysDCorp,
    AugeTec,
    Payever
  ]
})
