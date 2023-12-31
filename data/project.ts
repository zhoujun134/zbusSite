export const projects: Project[] = [
    // web 相关
  {
    title: '周君的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://zbus.top',
    source: 'https://github.com/zhoujun134/zbusSite',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  //   java 类的工具类
  {
    title: 'zjCommon java 工具库',
    description: '个人开发的一些常用 java 工具库组件，包括 spring 的异常处理, REST 统一返回数据，json 序列化，验证工具等',
    preview: '/img/project/tools.png',
    website: 'https://zbus.top/docs/open/zj-common',
    source: 'https://github.com/zhoujun134/commom',
    tags: ['opensource', 'design', 'favorite'],
    type: 'java',
  },

]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'personal' | 'web' | 'app' | 'toy' | 'java' | 'other'

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)
