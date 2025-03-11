import { NextResponse } from 'next/server';

export async function GET(request) {
    const token = request.cookies.get('auth_token');

    if(!token){
        return Response.json({ token: false });
    }

    return Response.json({ token: true });
    // return new Response(JSON.stringify({ message: "funcionando" }), {
    //     status: 200,
    //     headers: { "Content-Type": "application/json" }
    // });
}

 