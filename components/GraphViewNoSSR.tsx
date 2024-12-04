'use client';
import dynamic from 'next/dynamic';
 
const GraphViewNoSSR = dynamic(() => import('./GraphView'), {
 ssr: false
});

export default GraphViewNoSSR;