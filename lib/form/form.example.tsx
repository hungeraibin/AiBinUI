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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true}
    ]
    const errors = Validator(formData, rules);
    console.log(errors);
  }
  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <button type="submit">提交</button>
              <button>返回</button>
            </Fragment>  
          }
          onChange={(newValue)=>setFormData(newValue)}
          onSubmit={onSubmit}
    />
  )
}

export default FormExample;