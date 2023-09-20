export const Friends: Friend[] = [
  {
    title: '愧怍的小站',
    description: '道阻且长，行则将至',
    avatar: 'https://kuizuo.cn/img/logo.png',
    website: 'https://kuizuo.cn',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
