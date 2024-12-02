import zxcvbn from "zxcvbn";

export const getPasswordStrengthValue = (password: string): number => {

    if (!password) {
        return 0;
    }
    const result = zxcvbn(password);

    if (result.score <= 1) {
        return 30;
    } else if (result.score <= 3) {
        return 60;
    }
    return 100;
}