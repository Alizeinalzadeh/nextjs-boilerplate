import { NextSeoProps } from 'next-seo';
import React from 'react';

export interface ILayout extends NextSeoProps{
    children?: React.ReactNode;
    hasHeader?: boolean;
    hasFooter?: boolean;
    className?: string;
}
