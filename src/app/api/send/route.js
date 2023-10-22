import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apikey = process.env.RESEND_PUBLIC_API_KEY;
const resend = new Resend("re_XH4nLzZR_KTN8xWp4y9ZP51DCxerjFHQP");
export async function POST(datatest) {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['emprendomex@gmail.com'],
      subject: 'Hello world',
      headers: {
        'Access-Control-Allow-Origin':'*',
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}