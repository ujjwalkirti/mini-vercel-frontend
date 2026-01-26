import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProtocol(url: string): string {
  // If the URL contains localhost followed by a colon and port number, use http
  if (/localhost:\d+/.test(url)) {
    return "http";
  }
  return "https";
}
