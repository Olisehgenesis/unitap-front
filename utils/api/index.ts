export * from "./landing";

export const serverFetch = async (url: string, init?: RequestInit) => {
  if (init?.headers) {
    // @ts-ignore
    // init.headers.backend_service_key = process.env.BACKEND_SERVICE_KEY;
    // @ts-ignore
    // init.headers.Cookie = `backend_service_key=${process.env.BACKEND_SERVICE_KEY};`;
  }

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL! + url, {
    cache: "no-store",
    ...(init ??
      {
        // headers: {
        //   // backend_service_key: process.env.BACKEND_SERVICE_KEY!,
        //   // Cookie: `backend_service_key=${process.env.BACKEND_SERVICE_KEY};`,
        // },
      }),
  });

  // console.log(await res.clone().text());

  return await res.json();
};
