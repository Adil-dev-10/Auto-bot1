
import { ServiceItem } from './types';

export const FIVERR_LINK = "https://www.fiverr.com/s/1qYWVAr";
export const FIVERR_PROFILE_URL = "https://www.fiverr.com/adil_ahmmed";
// TODO: Replace this URL with your hosted image URL (e.g., from your public assets folder)
export const PROFILE_IMAGE_URL = "https://image2url.com/images/1765397605923-631f7c2e-d0ba-45bc-9a69-d7fc6b5b64b8.png";

// Portfolio Data
export const SERVICES: ServiceItem[] = [
    {
        id: '1',
        name: 'AI Chatbot',
        category: 'Customer Support',
        tag: 'POPULAR',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop',
        description: 'Instant replies to common questions. I build simple FAQ or Customer Support Chatbots that work 24/7 to engage visitors.'
    },
    {
        id: '2',
        name: 'Business Automation',
        category: 'Efficiency',
        tag: 'SMART',
        image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000&auto=format&fit=crop',
        description: 'Save data to Google Sheets, CRMs, or send email alerts automatically. Stop doing repetitive tasks manually.'
    },
    {
        id: '3',
        name: 'Chatbot Development',
        category: 'Custom Logic',
        tag: 'CORE',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop',
        description: 'Advanced conversational flows tailored to your specific business needs. From logic trees to complex decision making.'
    },
    {
        id: '4',
        name: 'Lead Generation',
        category: 'Growth',
        tag: 'SALES',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        description: 'Collect names, emails, and phone numbers automatically while you sleep. Turn visitors into paying customers.'
    },
    {
        id: '5',
        name: 'OpenAI / ChatGPT',
        category: 'Intelligence',
        tag: 'TRENDING',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
        description: 'Integration with OpenAI/ChatGPT for smarter, human-like replies that understand context and nuance.'
    },
];
