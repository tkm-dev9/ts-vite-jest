export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dotCheck = /(\.{2,})/; // 連続したドットをチェック
    return emailRegex.test(email) && !dotCheck.test(email);
}