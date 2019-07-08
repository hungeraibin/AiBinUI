import React, { ReactFragment } from 'react';
import Input from '../input/input';
import './form.scss';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误';
  };
  return (
    <form onSubmit={onSubmit}>
      <table className="ab-form-table">
        <tbody>
          {props.fields.map(f =>
            <tr className="ab-form-tr" key={f.name}>
              <td className="ab-form-td">
                <span className="ab-form-label">{ f.label }</span>
              </td>
              <td className="ab-form-td">
                <Input
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div className="ab-form-error">
                  {
                    props.errors[f.name] ? 
                      (props.errorDisplayMode === 'first' ?
                      transformError(props.errors[f.name][0]) : props.errors[f.name].map(transformError).join()) :
                      <span>&nbsp;</span>
                  }
                </div>
              </td>
            </tr>
          )}
          <tr className="ab-form-tr">
            <td className="ab-form-td"></td>
            <td className="ab-form-td">
              { props.buttons }
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

Form.defaultProps = {
  errorDisplayMode: 'first'
};

export default Form;