import { MetadataRoute, Metadata } from 'next';

export default function manifest():MetadataRoute.Manifest{
return{
        name: 'TrustAuthX',
        short_name: 'TrustAuthX',
        description: 'TrustAuthX is a Low Code Authentication as a Service Platform',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
        {
        src: './favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        },
    ],
}
}
