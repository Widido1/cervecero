import { getPaymentStatus } from "@/api";

export async function POST(request) {
    const body = await request.json();
    if (body.type === "payment") {
        const payment = await getPaymentStatus(body.data.id);
        console.log("Payment status: ", payment);
        // Process payment status
    }
    return new Response(null, { status: 200 });
}