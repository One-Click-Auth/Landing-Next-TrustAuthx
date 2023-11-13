import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
return [
    {
    url: 'https://www.trustauthx.com',
    lastModified: new Date(),
    changeFrequency: 'weekly',//we can do yearly also depends
    priority: 1.0,
    },
    {
    url: 'https://www.trustauthx.com/systems',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
    },
    {
    url: 'https://www.trustauthx.com/accessManagement',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
    },
]
}
