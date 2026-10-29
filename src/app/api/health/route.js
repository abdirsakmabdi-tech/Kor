export async function GET() {
  return Response.json({
    ok: true,
    service: "kor-website",
    time: new Date().toISOString(),
  });
}
