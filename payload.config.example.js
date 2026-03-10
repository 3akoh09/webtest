import { buildConfig } from 'payload/config';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_URL,
  collections: [
    { slug: 'services', fields: [{ name: 'name', type: 'text', required: true }, { name: 'description', type: 'textarea' }, { name: 'price', type: 'text' }, { name: 'priceNote', type: 'text' }, { name: 'category', type: 'text' }, { name: 'includes', type: 'array', fields: [{ name: 'item', type: 'text' }] }, { name: 'isVisible', type: 'checkbox' }, { name: 'order', type: 'number' }] },
    { slug: 'blog-posts', fields: [{ name: 'title', type: 'text', required: true }, { name: 'slug', type: 'text', required: true }, { name: 'content', type: 'richText' }, { name: 'excerpt', type: 'textarea' }, { name: 'category', type: 'text' }, { name: 'seoTitle', type: 'text' }, { name: 'publishedAt', type: 'date' }, { name: 'status', type: 'select', options: ['draft', 'published'] }] },
    { slug: 'testimonials', fields: [{ name: 'clientName', type: 'text', required: true }, { name: 'serviceType', type: 'text' }, { name: 'text', type: 'textarea' }, { name: 'rating', type: 'number' }, { name: 'isVisible', type: 'checkbox' }] },
    { slug: 'faq', fields: [{ name: 'question', type: 'text' }, { name: 'answer', type: 'textarea' }, { name: 'order', type: 'number' }, { name: 'isVisible', type: 'checkbox' }] },
    { slug: 'leads', fields: [{ name: 'name', type: 'text' }, { name: 'contact', type: 'text' }, { name: 'service', type: 'text' }, { name: 'message', type: 'textarea' }, { name: 'preferredMessenger', type: 'select', options: ['telegram', 'viber', 'instagram'] }, { name: 'status', type: 'select', options: ['new', 'in_progress', 'done'] }] },
    { slug: 'media', upload: true, fields: [] }
  ],
  globals: [
    { slug: 'site-settings', fields: [{ name: 'phone', type: 'text' }, { name: 'telegram', type: 'text' }, { name: 'instagram', type: 'text' }, { name: 'email', type: 'email' }, { name: 'heroTitle', type: 'text' }, { name: 'heroSubtitle', type: 'textarea' }, { name: 'noticeBanner', type: 'textarea' }, { name: 'workingHours', type: 'text' }] }
  ]
});
