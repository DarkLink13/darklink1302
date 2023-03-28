import { INode } from '~~/types/core'

export const Linux: INode = {
  item: {
    id: 'linux',
    type: NodeItemType.Skill,
    label: { value: 'Linux' },
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/linux.png' },
    colors: { primary: '#fc6d26', secondary: '#f2a832', hover: '#f2d115' }
  }
}

export const Ubuntu: INode = {
  item: {
    id: 'ubuntu',
    type: NodeItemType.Skill,
    label: { value: 'Ubuntu' },
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }, { value: '18-21', type: NodeItemLabelType.Version }],
    background: { src: '/assets/img/ubuntu.png' },
    colors: { primary: '#fc6d26', secondary: '#f2a832', hover: '#f2d115' }
  },
  children: [Linux]
}

export const Windows: INode = {
  item: {
    id: 'windows',
    type: NodeItemType.Skill,
    label: { value: 'Windows' },
    sublabels: [{ value: '15', type: NodeItemLabelType.Years }, { value: 'XP,7,8,8.1,10,11', type: NodeItemLabelType.Version }],
    background: { src: '/assets/img/windows.png' },
    colors: { primary: '#0656c6', secondary: '#018ce9', hover: '#02a5eb' }
  }
}

export const OS: INode = {
  item: {
    id: 'os',
    type: NodeItemType.Skill,
    label: { value: 'OS' },
    icon: { key: 'icon-park-outline:config' },
    colors: { primary: '#0656c6', secondary: '#018ce9', hover: '#02a5eb' }
  },
  children: [undefined, Windows, undefined, undefined, undefined, Ubuntu]
}
