import React, { useState, Fragment } from 'react';
import Form, { FormValue }  from './form';
import Validator from './validator';

const FormExample: React.FunctionComponent = () => {
  const [formData,setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: { type: 'text' }},
    {name: 'password', label: '密码', input: { type: 'password' }},
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
    ]
    const errors = Validator(formData, rules);
    setErrors(errors);
  }
  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <button type="submit">提交</button>
              <button>返回</button>
            </Fragment>  
          }
          errors={errors}
          onChange={(newValue)=>setFormData(newValue)}
          onSubmit={onSubmit}
    />
  )
}

export default FormExample;