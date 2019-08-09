import React from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.status !== prevProps.status && this.props.status) {
      this.props.grantAccess()
    }
  }

  render() {
  return (
    <div>
    <div className="form">
      <h1 style={{marginBottom: '0', color: 'rgb(89, 95, 99)', marginLeft: '-65px'}}>Register</h1>
      <FormikForm style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <label>
          <p style={{margin: '0', textAlign: 'left', marginLeft: '5px', color: 'rgb(89, 95, 99)'}}>Username</p>
        <Field type="text" name="username" placeholder="Username" />
        {this.props.touched.username && this.props.errors.username && (
          <p className="error">{this.props.errors.username}</p>
        )}
        </label>
        <label>
          <p style={{margin: '0', textAlign: 'left', marginLeft: '5px', color: 'rgb(89, 95, 99)'}}>Password</p>
        <Field type="password" name="password" placeholder="Password" />
        {this.props.touched.password && this.props.errors.password && (
          <p className="error">{this.props.errors.password}</p>
        )}
        </label>
        <button type="submit">Submit</button>
      </FormikForm>
    </div>
    </div>
  )
  }
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be 6 characters or longer")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Form);

export default FormikRegisterForm;