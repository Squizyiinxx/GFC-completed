import React from 'react';
import { iconMap } from '@/types/interfaceSub';
interface IconProps {
    name: keyof typeof iconMap | undefined;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
    if (!name || !(name in iconMap)) {
        return null;
    }
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={className} />;
};

export default Icon;