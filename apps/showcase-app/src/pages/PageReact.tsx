import CardSkeleton from '@/components/skeleton/SkeletonCard'
import { pageReactContent } from '@/constant/pageContent'
import { html } from '@/constant/project'
import LayoutPage from '@/layout/LayoutPage'
import React, { Suspense } from 'react'

const Card = React.lazy(() => import("@/components/Card"))

const PageReact = () => {
    return (
        <LayoutPage {...pageReactContent()}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7 custom-scroll">
                {
                    html.filter(item => item.type === 'react').map((item) => (
                        <Suspense fallback={<CardSkeleton />} key={item.id}>
                            <Card key={item.id} image={item.image} title={item.title} slug={`/react/${item.slug}`} description={item.description} url={item.url} />
                        </Suspense>
                    ))
                }
            </div>
        </LayoutPage>
    )
}

export default PageReact