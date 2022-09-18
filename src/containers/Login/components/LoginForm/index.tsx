/**
 *
 * LoginForm
 *
 */

import React, { useEffect, useState } from 'react';
import { FormikProps, withFormik } from 'formik';
import {
  FormGroup,
  FormControl,
  FormLabel,
  FlexFormGroup,
  FormFieldError,
  Button,
  P,
  Link,
} from 'components';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import theme from 'styles/theme';

interface FormValues {
  email: string;
  password: string;
  recaptcha_token: string;
}

interface LoginInnerFormProps {
  isFormSubmitting: boolean;
}

interface Props {}

const siteKey = process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY;

function LoginInnerForm(props: LoginInnerFormProps & FormikProps<FormValues>) {

  const { setFieldValue, handleSubmit } = props;

  const [reCaptchaInstance, setReCaptchaInstance] = useState<any>(null);

  const verifyCallback = response => {
    setFieldValue('recaptcha_token', response);
    handleSubmit();
  };

  return (
    <div>
      <form
        className="mw-form-field w-100"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormGroup>
          <FormLabel htmlFor="#email">{'EMAIL'}</FormLabel>
          <FormControl
            id="email"
            placeholder={'Type your email address here'}
            type="text"
            onChange={props.handleChange}
            value={props.values.email}
            border={
              props.touched.email && props.errors.email
                ? theme.colors.redPigment
                : ''
            }
          />
          {props.touched.email && props.errors.email && (
            <FormFieldError name="email" />
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="#password">{'PASSWORD'}</FormLabel>
          <FormControl
            id="password"
            placeholder={'Enter your password here'}
            type="password"
            onChange={props.handleChange}
            value={props.values.password}
            border={
              props.touched.password && props.errors.password
                ? theme.colors.redPigment
                : ''
            }
          />
          {props.touched.password && props.errors.password && (
            <FormFieldError name="password" />
          )}
        </FormGroup>

        <FlexFormGroup mb="none" pb="m" justifyContent="start">
          <Button
            width="100%"
            variant={'primary'}
            type="submit"
            disabled={!props.dirty}
          >
            {'Log In'}
          </Button>
        </FlexFormGroup>
      </form>
    </div>
  );
}

const LoginFormFormik = withFormik<LoginInnerFormProps, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '', recaptcha_token: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please input a valid email')
      .required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    let payload: any = {
      email: values.email,
      password: values.password,
      rememberMe: true,
      recaptcha_token: 'test',
    };

    setSubmitting(false);
  },
})(LoginInnerForm);

export function LoginForm(props: Props) {

  let history = useHistory();
  let location = useLocation();

  const isLoading = false;

  let { from } = { from: location.pathname as any } || {
    from: { pathname: '/' },
  };

  return <LoginFormFormik isFormSubmitting={isLoading} />;
}
