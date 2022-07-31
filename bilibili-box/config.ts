const config = {
  uid: Deno.env.get("UID"),
  ghToken: Deno.env.get("GH_TOKEN"),
  gistId: Deno.env.get("GIST_ID"),
};

export default config;
