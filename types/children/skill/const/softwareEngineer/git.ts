import { INode } from '~~/types/core'
export const GitLab: INode = {
  item: {
    id: 'git',
    type: NodeItemType.Skill,
    label: { value: 'GitLab' },
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/gitlab.png' },
    colors: { primary: '#e24329', secondary: '#fc6d26', hover: '#fca326' }
  }
}

export const GitHub: INode = {
  item: {
    id: 'git',
    type: NodeItemType.Skill,
    label: { value: 'GitHub' },
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/gitlab.png' },
    colors: { primary: '#16121f', secondary: '#30353e', hover: '#8c929d' }
  }
}

export const Git: INode = {
  item: {
    id: 'git',
    exp: 75,
    type: NodeItemType.Skill,
    label: { value: 'Git' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/git.png' },
    colors: { primary: '#e24329', secondary: '#fc6d26', hover: '#fca326' }
  },
  children: [GitLab, GitHub]
}
