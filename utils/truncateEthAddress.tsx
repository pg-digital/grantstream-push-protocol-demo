interface TruncateOptions {
  nPrefix?: number;
  nSuffix?: number;
  separator?: "braces" | "brackets" | "parenthesis";
}

const opening = {
  braces: "{",
  brackets: "[",
  parenthesis: "(",
} as const;

const closing = {
  braces: "}",
  brackets: "]",
  parenthesis: ")",
} as const;

export function truncateEthAddress(address: string, options?: TruncateOptions) {
  const match = address.match(/^(0x[a-zA-Z0-9])[a-zA-Z0-9]+([a-zA-Z0-9])$/);

  const { nPrefix, nSuffix, separator } = options ?? {};

  const nTotalIsLongerThanAddress =
    (nPrefix || 0) + (nSuffix || 0) > address.length;

  return match && !nTotalIsLongerThanAddress
    ? `0x${address.slice(2, 2 + (nPrefix || 4))}${
        separator ? opening[separator] : ""
      }…${separator ? closing[separator] : ""}${address.slice(
        address.length - (nSuffix || 4)
      )}`
    : address;
}
