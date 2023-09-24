import React from 'react'
import clsx from 'clsx'
import Translate, {translate} from '@docusaurus/Translate'

import styles from './styles.module.scss'

import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import SectionTitle from '../SectionTitle'

type FeatureItem = {
    title: string
    Svg: React.ComponentType<React.ComponentProps<'svg'>>
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: translate({
            id: 'homepage.feature.developer',
            message: 'Java 后端工程师',
        }),
        Svg: WebDeveloperSvg,
        description: (
            <>
                作为一名 java 后端工程师，希望能带给你们一些工作和项目中的启发。
            </>
        ),
    },
    {
        title: translate({
            id: 'homepage.feature.spider',
            message: '初出茅庐 & 前端开发',
        }),
        Svg: SpiderSvg,
        description: (
            <>
                作为一名程序开发者，全面的学习各项技术是必不可少的过程，前端页面能够很好的展示自己的学习所得，也能将自己的所想转换为可以看见的东西。
            </>
        ),
    },
    {
        title: translate({
            id: 'homepage.feature.enthusiast',
            message: '开源爱好者',
        }),
        Svg: OpenSourceSvg,
        description: (
            <>
                作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
            </>
        ),
    },
]

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col', styles.feature)}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--left padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section
            className={clsx(styles.featureContainer, 'container padding-vert--sm')}
        >
            <SectionTitle icon={'ri:map-pin-user-line'}>
                <Translate id="homepage.feature.title">个人特点</Translate>
            </SectionTitle>
            <div className={clsx('row', styles.features)}>
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </section>
    )
}
