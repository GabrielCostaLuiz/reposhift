export async function GET() {
  return Response.json(
    {
      message: "Servidor Web Funcionando",
    },
    { status: 200 },
  );
}
