// Canonical host guard — redirects visitors landing on legacy/preview hosts
// to the canonical production domain, preserving path + query + hash.
// NOTE: True 301 redirects from the old domain must be set at the DNS/hosting
// level of mahadevvbooks.com (e.g., Cloudflare page rule). This client-side
// guard only handles cases where the old domain *resolves* to this app.

const CANONICAL_HOST = "mahadevbookbets.live";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

// Hosts that should NOT be redirected (local dev + Lovable preview/staging).
const ALLOWED_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\.0\.0\.1$/,
  /\.lovable\.app$/i,
  /\.lovableproject\.com$/i,
];

// Legacy hosts that should be force-redirected to the canonical domain.
const LEGACY_HOSTS = [
  "mahadevvbooks.com",
  "www.mahadevvbooks.com",
  `www.${CANONICAL_HOST}`,
];

export function enforceCanonicalHost() {
  if (typeof window === "undefined") return;

  const { hostname, pathname, search, hash, protocol } = window.location;

  // Force HTTPS on the canonical host
  if (hostname === CANONICAL_HOST && protocol === "http:") {
    window.location.replace(`${CANONICAL_ORIGIN}${pathname}${search}${hash}`);
    return;
  }

  // Redirect known legacy hosts
  if (LEGACY_HOSTS.includes(hostname.toLowerCase())) {
    window.location.replace(`${CANONICAL_ORIGIN}${pathname}${search}${hash}`);
    return;
  }

  // Leave dev/preview hosts alone
  if (ALLOWED_HOST_PATTERNS.some((re) => re.test(hostname))) return;

  // Leave the canonical host alone
  if (hostname === CANONICAL_HOST) return;
}
