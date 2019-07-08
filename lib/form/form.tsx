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
  errors: { [K: string]: string[] }
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
  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          {props.fields.map(f =>
            <tr className="ab-form-tr" key={f.name}>
              <td className="ab-form-td">
                <span>{ f.label }</span>
              </td>
              <td className="ab-form-td">
                <Input
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div>{props.errors[f.name]}</div>
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

export default Form;