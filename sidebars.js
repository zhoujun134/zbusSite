/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
      label: 'Node',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/node',
        },
      ],
    },
    {
      label: 'Java',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/java',
        },
      ],
    },
    {
      label: 'Go',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/go/go-json-usage',
        'skill/go/go-send-http-request',
        'skill/go/go-call-js',
        'skill/go/go-concurrent',
        'skill/go/try-gin-framework'
      ],
    },
    {
      label: 'Git',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/git',
        },
      ],
    },
    {
      label: '数据库',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database'],
      },
      items: [
        // {
        //   label: 'Mysql',
        //   type: 'category',
        //   link: {
        //     type: 'doc',
        //     id: 'skill/database/mysql/mysql-note',
        //   },
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'skill/database/mysql',
        //     },
        //   ],
        // },
        // {
        //   label: 'MongoDB',
        //   type: 'category',
        //   link: {
        //     type: 'doc',
        //     id: 'skill/database/mongo/mongodb-note',
        //   },
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'skill/database/mongo',
        //     },
        //   ],
        // },
        // {
        //   label: 'Redis',
        //   type: 'category',
        //   link: {
        //     type: 'doc',
        //     id: 'skill/database/redis/redis-note',
        //   },
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'skill/database/redis',
        //     },
        //   ],
        // },
        // {
        //   label: 'Elasticsearch',
        //   type: 'category',
        //   link: {
        //     type: 'doc',
        //     id: 'skill/database/elasticsearch/elasticsearch-note',
        //   },
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'skill/database/elasticsearch',
        //     },
        //   ],
        // },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/idea-config',
    'tools/jetbrains-product-activation-method',
  ]
}

module.exports = sidebars
