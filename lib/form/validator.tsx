import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

type FormRules = Array<FormRule>

interface FormErrors {
  [K: string]: string[];
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  }
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      errors[rule.key] = ['required'];
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, 'minLength');
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, 'maxLength');
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, 'pattern');
    }
  });
  return errors;
};

export default Validator;