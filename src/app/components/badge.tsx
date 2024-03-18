import React from 'react';

interface BadgeProps {
    text: string;
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
    return (
        <div style={{ backgroundColor: color, }}
            className='rounded-full px-2 py-1 border my-2 text-sm'>
            {text}
        </div>
    );
};

export default Badge;