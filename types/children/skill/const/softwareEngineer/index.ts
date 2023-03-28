import { INode } from '~~/types/core'

export * from './git'
export * from './ide'
export * from './os'

export const Docker: INode = {
  item: {
    id: 'docker',
    exp: 30,
    type: NodeItemType.Skill,
    label: { value: 'Docker' },
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/docker.png' },
    colors: { primary: '#683c9a', secondary: '#8857be', hover: '#bc8cf3' }
  }
}
export const Jenkis: INode = {
  item: {
    id: 'jenkins',
    exp: 20,
    type: NodeItemType.Skill,
    label: { value: 'Jenkins' },
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/jenkins.png' },
    colors: { primary: '#335061', secondary: '#d33833', hover: '#f0d6b7' }
  }
}
export const NGinx: INode = {
  item: {
    id: 'nginx',
    exp: 10,
    type: NodeItemType.Skill,
    label: { value: 'NGinx' },
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/nginx.png' },
    colors: { primary: '#1d532f', secondary: '#1a6e37', hover: '#018e37' }
  }
}
