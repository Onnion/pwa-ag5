import { EMAIL_REGEX, NAME_REGEX } from '../../helpers/consts/consts.helpers';


export const validEmail = (email: string): boolean => {
  return (!email) ? true : EMAIL_REGEX.test(email);
};


export const validName = (name: string): boolean => {
  return (!name) ? true : NAME_REGEX.test(name);
};
