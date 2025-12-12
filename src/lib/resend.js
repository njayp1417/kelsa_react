import { Resend } from 'resend';

const resend = new Resend('re_eV9L9Jmy_HCtfY9chQbbcoL7JShwxLF32');

export const sendContactEmail = async (formData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Kelsa Events <onboarding@resend.dev>',
      to: ['kelsarentalsevent@gmail.com'],
      subject: `New Contact - ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Event Type:</strong> ${formData.eventType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Sent from Kelsa Events website</em></p>
      `,
      reply_to: formData.email
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error };
  }
};