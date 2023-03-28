import { INode } from '~~/types/core'

export const VisualStudioCode: INode = {
  item: {
    id: 'visualstudiocode',
    type: NodeItemType.Skill,
    label: { value: 'Visual Studio Code' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/visualstudiocode.png' },
    colors: { primary: '#115c9f', secondary: '#347eb1', hover: '#3aa0e7' }
  }
}

export const VisualStudio: INode = {
  item: {
    id: 'visualstudio',
    type: NodeItemType.Skill,
    label: { value: 'Visual Studio' },
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/visualstudio.png' },
    colors: { primary: '#683c9a', secondary: '#8857be', hover: '#bc8cf3' }
  }
}

export const IDE: INode = {
  item: {
    id: 'ide',
    type: NodeItemType.Skill,
    label: { value: 'IDE' },
    icon: { key: 'carbon:tool-kit' },
    colors: { primary: '#683c9a', secondary: '#8857be', hover: '#bc8cf3' }
  },
  children: [undefined, VisualStudio, undefined, undefined, undefined, VisualStudioCode]
}
