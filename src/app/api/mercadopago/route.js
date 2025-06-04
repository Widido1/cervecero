import { Payment } from "mercadopago";
import { revalidatePath } from "next/cache";
import { MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN 
});

export async function POST(request) {
  const body = await request.json();

  const payment = await new Payment(client).get({ id: body.data.id });

  if (payment.status === "approved") {
    console.log("Payment status: ", payment.status);
    console.log("Payment ID: ", payment.id);  
    console.log("Payer Info: ",   payment.payer );
    console.log("Items purchased: ", payment.additional_info.items);
    console.log("Payment amount: ", payment.transaction_amount);    
    console.log("Payment date: ", payment.date_approved);
    revalidatePath("/");
  }

  return new Response(null, { status: 200 });
}