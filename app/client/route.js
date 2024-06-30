import { createClient } from "@/prismicio";

export async function GET() {
  const client = createClient();

  const resp = await client.getByTag("homepage");
  console.log(resp);
  const data = resp.results;

  return new Response(JSON.stringify(data));
}
