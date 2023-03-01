import { INode } from '~~/types/core'

export const PostgreSQL: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'PostgreSQL' },
    background: { src: '/assets/img/postgresql.png' },
    colors: { primary: '#306792', secondary: '#000000', hover: '#ffffff' }
  }
}
export const Redis: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'Redis' },
    background: { src: '/assets/img/redis.png' },
    colors: { primary: '#a32321', secondary: '#dc382d', hover: '#ffffff' }
  }
}
export const ElasticSearch: INode = {
  item: {
    type: NodeItemType.Skill,
    label: { name: 'ElasticSearch' },
    background: { src: '/assets/img/elasticsearch.png' },
    colors: { primary: '#343741', secondary: '#00bfb3', hover: '#fec514' }
  }
}
