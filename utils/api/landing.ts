export async function countUsersAPI() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/api/auth/user/count/");
  const data = await response.json();
  return data.count;
}

export async function countGasClaimedAPI() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/api/gastap/claims/count/");
  const data = await response.json();
  return data.count;
}
