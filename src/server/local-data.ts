import {
  IHeaderLinks,
  IFooterLinks,
  IFooterImages,
  IDicoverMenu
} from 'types/local-data'

export const headerLinks: IHeaderLinks[] = [
  {
    title: '发现音乐',
    link: '/discover'
  },
  {
    title: '我的音乐',
    link: '/mine'
  },
  {
    title: '朋友',
    link: '/friend'
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product'
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/'
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download'
  }
]

export const footerLinks: IFooterLinks[] = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    title: '意见反馈',
    link: '#'
  }
]

export const footerImages: IFooterImages[] = [
  {
    link: 'https://music.163.com/st/userbasic#/auth'
  },
  {
    link: 'https://music.163.com/recruit'
  },
  {
    link: 'https://music.163.com/web/reward'
  },
  {
    link: 'https://music.163.com/uservideo#/plan'
  }
]

// discover中的数据
export const dicoverMenu: IDicoverMenu[] = [
  {
    title: '推荐',
    link: 'recommend'
  },
  {
    title: '排行榜',
    link: 'ranking'
  },
  {
    title: '歌单',
    link: 'songs'
  },
  {
    title: '主播电台',
    link: 'djradio'
  },
  {
    title: '歌手',
    link: 'artist'
  },
  {
    title: '新碟上架',
    link: 'album'
  }
]
