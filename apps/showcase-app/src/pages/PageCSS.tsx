import CardSkeleton from "@/components/skeleton/SkeletonCard"
import { pageCSSContent } from "@/constant/pageContent"
import { html } from "@/constant/project"
import LayoutPage from "@/layout/LayoutPage"
import { lazy, Suspense } from "react"
const Card = lazy(() => import("@/components/Card"))
export default function PageCSS () {
    return (
            <LayoutPage {...pageCSSContent()}>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7 custom-scroll">
                    {
                        html.filter(item => item.type === 'css').map((item) => (
                            <Suspense fallback={<CardSkeleton />} key={item.id}>
                                <Card key={item.id} image={item.image} slug={`/css/${item.slug}`} title={item.title} description={item.description} url={item.url} />
                            </Suspense>
                        ))
                    }
                </div>
            </LayoutPage>
    )
}
