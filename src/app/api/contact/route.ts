import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Mensaje enviado exitosamente",
        id: contact.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
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
