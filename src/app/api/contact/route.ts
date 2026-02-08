import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Nombre, email, asunto y mensaje son requeridos" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Send email notification
    const recipientEmail = process.env.CONTACT_EMAIL || "administracion@quantarax.net";
    
    const { data, error } = await resend.emails.send({
      from: "QuantaraX <contacto@quantarax.net>",
      to: [recipientEmail],
      subject: `[Contacto Web] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066ff; border-bottom: 2px solid #0066ff; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px; background: #f5f5f5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; background: #f5f5f5;">${phone || "No proporcionado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px;">${company || "No proporcionada"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Asunto:</td>
              <td style="padding: 10px; background: #f5f5f5;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #0066ff;">
            <h3 style="margin-top: 0; color: #333;">Mensaje:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Este mensaje fue enviado desde el formulario de contacto de quantarax.net
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Error al enviar el email: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Mensaje enviado exitosamente",
        emailId: data?.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Método no permitido" },
    { status: 405 }
  );
}
