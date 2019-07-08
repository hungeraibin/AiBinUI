import React, { useState, Fragment } from 'react';
import Form, { FormValue }  from './form';
import Validator from './validator';
import Button from '../button/button';

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
  const validator = (username: string) => {
    return new Promise<void>((resolve, reject) => {
      const usernames = ['jack', 'aibin'];
      setTimeout(() => {
        if (usernames.indexOf(username) >= 0) {
          reject('unique');
        } else {
          resolve();
        }
      }, 2000);
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'username', validator},
      {key: 'password', required: true},
      {key: 'password', validator},
    ]
    Validator(formData, rules, (errors) => {
      setErrors(errors);
    });
  }
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'minLength',
      maxLength: 'maxLength'
    }
    return map[message];
  }
  return (
    <Form 
      value={formData}
      fields={fields}
      buttons={
        <Fragment>
          <Button type="submit" level="important">提交</Button>
          <Button>返回</Button>
        </Fragment>
      }
      errors={errors}
      transformError={transformError}
      onChange={(newValue)=>setFormData(newValue)}
      onSubmit={onSubmit}
    />
  )
}

export default FormExample;