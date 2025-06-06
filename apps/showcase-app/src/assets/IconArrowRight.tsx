
import type { IconProps } from '@/types/global'
import React from 'react'

const IconArrowRight:React.FC<IconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" strokeWidth={1.5} stroke='currentColor' className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

    )
}

export default IconArrowRight