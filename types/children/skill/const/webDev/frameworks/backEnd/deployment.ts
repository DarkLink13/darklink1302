import { INode } from '~~/types/core'

export const GCP: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'Google Cloud Platform' },
    background: { src: '/assets/gcp.png' },
    colors: { primary: '#e34133', secondary: '#4081ec', hover: '#f3b605' }
  }
}
