export function validateEmail(email: string): string {
  if (!email.trim()) return "Email khÃ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng";

  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!regex.test(email)) {
    return "Email khÃ´ng há»£p lá»‡";
  }

  return "";
}

export function validatePhone(phone: string): string {
  if (!phone.trim()) return "Sá»‘ Ä‘iá»‡n thoáº¡i khÃ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng";

  // 10 sá»‘ VN
  const regex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

  if (!regex.test(phone)) {
    return "Sá»‘ Ä‘iá»‡n thoáº¡i khÃ´ng há»£p lá»‡";
  }

  return "";
}
