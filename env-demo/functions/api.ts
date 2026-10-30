export const onRequest: PagesFunction = async (context) => {
  const env = context.env
  const data = {
    site_name: env.SITE_NAME || "未配置 site_name",
    has_token: env.MY_TOKEN ? true : false,
    timestamp: new Date().toISOString()
  }
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json" }
  })
}
