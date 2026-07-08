export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
};

export const STATS: Stat[] = [
  { label: "Active Players", value: 2, suffix: "M+" },
  { label: "Withdrawals Paid", value: 50, prefix: "₹", suffix: "Cr+" },
  { label: "Daily Winners", value: 15, suffix: "K+" },
  { label: "Years Online", value: 5, suffix: "+" },
];
