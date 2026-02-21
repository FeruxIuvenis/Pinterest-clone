import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkPasswordStrength(password: string): 0 | 1 | 2 {
    const predictablePatterns = /^(password|abc|123|12345678|123456|abcdefgh|xyz)$/i;

    if (password.length <= 8) return 0;
    if (predictablePatterns.test(password)) return 0;
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) return 0;
    if (/(.)\1{4,}/.test(password)) return 0;

    if (/[!@#$%&*\-=+_?]/.test(password)) return 2;

    if (/[0-9]/.test(password)) return 1;

    return 0;
}

export function checkUsername(username: string): boolean {
    return /^[A-Za-z0-9_-]+$/.test(username);
}