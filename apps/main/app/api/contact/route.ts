import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body as {
      name: string;
      email: string;
      company?: string;
      service?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Compose email content
    const subject = `New lead from Sheriax site — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${
      company ?? '-'
    }\nService: ${service ?? '-'}\n\nMessage:\n${message}`;

    await resend.emails.send({
      from: 'Sheriax Leads <noreply@sheriax.com>',
      to: ['hi@sheriax.com'],
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
