import { INode } from '~~/types/core'

export const LosAldeanos: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'losaldeanos',
    label: { value: 'Los Aldeanos' },
    background: { src: '/assets/img/losaldeanos.png' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  }
}
export const Eminem: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'eminem',
    label: { value: 'Eminem' },
    background: { src: '/assets/img/eminem.png' },
    colors: {
      primary: '#1d532f',
      secondary: '#1a6e37',
      hover: '#018e37'
    }
  }
}
export const PostMalone: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'postmalone',
    label: { value: 'Post Malone' },
    background: { src: '/assets/img/postmalone.png' },
    colors: {
      primary: '#fda172',
      secondary: '#f7d100',
      hover: '#f7e771'
    }
  }
}

export const FiftyCent: INode = {
  item: {
    type: NodeItemType.Like,
    id: '50cent',
    label: { value: '50 Cent' },
    background: { src: '/assets/img/50cent.png' },
    colors: {
      primary: '#920118',
      secondary: '#b60000',
      hover: '#f76464'
    }
  }
}

export const Rap: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'rap',
    icon: { key: 'ph:microphone-stage-bold' },
    colors: {
      primary: '#25a394',
      secondary: '#00a19d',
      hover: '#87ffff'
    }
  },
  children: [undefined, FiftyCent, PostMalone, undefined, Eminem, LosAldeanos]
}
