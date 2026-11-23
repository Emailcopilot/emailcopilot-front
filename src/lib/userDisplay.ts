export type SessionTokenClaims = {
  username?: string | null;
  email?: string | null;
  sub?: string;
};

export type DisplayUser = {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  primaryEmailAddress?: { emailAddress?: string | null } | null;
  emailAddresses?: Array<{ emailAddress?: string | null }>;
};

export function decodeJwtPayload(token: string): SessionTokenClaims | null {
  try {
    const encodedPayload = token.split(".")[1];
    if (!encodedPayload) return null;

    const base64 = encodedPayload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );

    return JSON.parse(atob(padded)) as SessionTokenClaims;
  } catch {
    return null;
  }
}

export function getEmailLocalPart(email?: string | null): string {
  if (!email) return "";

  const localPart = email.trim().split("@")[0]?.split("+")[0]?.trim();
  return localPart || "";
}

export function getDisplayUsername(
  claims?: SessionTokenClaims | null,
  user?: DisplayUser | null,
): string {
  const claimUsername = claims?.username?.trim();
  if (claimUsername) return claimUsername;

  const userUsername = user?.username?.trim();
  if (userUsername) return userUsername;

  const email =
    claims?.email ||
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress;

  return getEmailLocalPart(email);
}
