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
    {
        url: 'https://app.trustauthx.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
        },
        {
        url: 'https://app.trustauthx.com/signup',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        },
        {
        url: 'https://docs.trustauthx.com/start',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
        },
        {
        url: 'https://docs.trustauthx.com/Begin-With/Languages',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        },
        {
        url: 'https://github.com/One-Click-Auth/Docs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        },
        {
        url: 'https://pypi.org/project/trustauthx/',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        },
        {
        url: 'https://www.npmjs.com/package/trustauthx',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        },
        {
            url: 'https://discord.com/invite/KZ6QeMrfQT',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
            },
            {
                url: 'https://www.linkedin.com/company/trustauthx',
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.6,
                },
]
}
