import type React from 'react'
import LayoutApp from './LayoutApp'
import Icon from '@/assets/Icon'
import type { PageProps } from '@/types/global'


const LayoutPage: React.FC<PageProps> = ({ title, icon, description, children }) => {
    return (
        <LayoutApp>
            <div className="px-4">
                <div className="w-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name={icon} className="w-8 h-8 text-[var(--accent-primary)]" />
                        <h3 className="mb-0 text-[var(--accent-primary)]">{title} Challenges</h3>
                    </div>
                    <p className="text-sm text-slate-400">
                        {description}
                    </p>
                </div>
                {children}

            </div>
        </LayoutApp>
    )
}

export default LayoutPage