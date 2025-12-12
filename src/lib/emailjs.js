import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_kelsa';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS dashboard

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      message: formData.message,
      to_email: 'kelsarentalsevent@gmail.com'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};