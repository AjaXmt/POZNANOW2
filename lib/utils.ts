import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPlayerName(name: string): string {
  return name
    .split(" ")
    .map((part, index, array) => (index === array.length - 1 ? part[0] + "." : part))
    .join(" ")
}

