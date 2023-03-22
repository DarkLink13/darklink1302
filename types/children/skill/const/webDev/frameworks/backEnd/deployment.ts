import { INode } from '~~/types/core'

export const GCP: INode = {
  item: {
    id: 'gcp',
    exp: 30,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    type: NodeItemType.Skill,
    label: { value: 'Google Cloud Platform' },
    background: { src: '/assets/img/gcp.png' },
    colors: { primary: '#e34133', secondary: '#4081ec', hover: '#f3b605' }
  }
}
