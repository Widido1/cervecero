import { getPaymentStatus } from "@/api";

export async function POST(request) {
    const body = await request.json();
    await getPaymentStatus(body.id);
    return new Response(JSON.stringify({ message: "Payment status checked successfully" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}