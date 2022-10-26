// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email) => {
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (emailRegex.test(email)) {
    return false;
  }
  return true;
};

// 비밀번호 유효성 검사
export const validatePassword = (pwd) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-_])(?=.*[0-9]).{8,25}$/;
  if (passwordRegex.test(pwd)) {
    return false;
  }
  return true;
};

// 숫자에 쉼표를 추가함. (10000 -> 10,000)
export const addCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄
// 예시: 13,000원 -> 13000, 20,000개 -> 20000
export const convertToNumber = (string: string) => {
  return parseInt(string.replace(/(,|개|원)/g, ""));
};

// date YYYY-MM-DD
export const dateYearMonthDay = (date: string) => {
  const result = date.split("-");
  let year = Number(result[0]);
  let month: string | number = Number(result[1]);
  month = month >= 10 ? month : "0" + month;
  let day = Number(result[2].slice(0, 2));
  const hyphenFormat = `${year}-${month}-${day}`;
  return hyphenFormat;
};
