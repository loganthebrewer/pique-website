import {ElementType, ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

type TypographyProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
};

const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
};

export default function Typography<T extends ElementType = 'p'>(
    {
        as,
        children,
        className,
        variant = 'body',
    }: TypographyProps<T>) {
    const Component = as || 'p';

    return (
        <Component className={twMerge(variantStyles[variant], className)}>
            {children}
        </Component>
    );
}