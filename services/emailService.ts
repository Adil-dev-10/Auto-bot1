import emailjs from '@emailjs/browser';

interface EmailParams {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

export const initEmailService = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
        emailjs.init(publicKey);
    }
};

export const sendEmail = async (params: EmailParams) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('Attempting to send email...', {
        serviceId: serviceId ? 'Present' : 'Missing',
        templateId: templateId ? 'Present' : 'Missing',
        publicKey: publicKey ? 'Present' : 'Missing'
    });

    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check .env.local');
    }

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: params.name,
                from_email: params.email,
                project_type: params.projectType,
                message: params.message,
                to_email: 'jidanrock997@gmail.com',
            },
            publicKey
        );
        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Email sending failed Details:', error);
        throw error;
    }
};
