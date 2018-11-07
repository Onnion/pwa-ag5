import { cleanUp } from '../../../utils/mask.utils';

export const validPhone = (phone: string): boolean => {
    return true;
};

const validWIthDigt = ($phone: string) => {
    let validation = true;
    const phone = cleanUp($phone);

    if (phone.length < 10 || phone.length > 11) {
        validation = false;
    }

    if (['00', '01', '02', '03', , '04', , '05', , '06', , '07', , '08', '09', '10'].indexOf(phone.substring(0, 2)) !== -1) {
        validation = false;
    }

    return validation;
};
