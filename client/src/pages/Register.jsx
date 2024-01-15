import React from 'react'
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/Actions/userActions';
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './Register.css'
AOS.init();



const Register = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer)


  function onFinish(values) {
    //dispatch(userRegister(values))
    console.log(values)
    dispatch(userRegister(values))
  }




  return (

    <div className='login' style={{ position: 'relative' }}>

      {loading === true && (<Spinner />)}


      <Row gutter={16} className='d-flex align-items-center'>

        <Col lg={16} >

          {/* <img 
              data-aos='slide-left'
              data-aos-duration='1500' 
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="imgsrc"height='600vh' width='700px'/>

              <h1 className='login-logo'>SHEYCARS</h1>
             */}

        </Col>

        <Col lg={8} className='text-left p-5'>

          <div className='login-container-2'>

            <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

              <h1>Register</h1>
              <hr />

              <Form.Item name='username' label='Username' rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name='name' label='Name' rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name='surname' label='Surname' rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name='email' label='Email' rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item
                name='confirmPassword'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match.'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <button className='btn1 mt-2 mb-2'>Register</button>

              <br />

              <Link to='/login' color='black'>Click Here to Login</Link>
              <Link to='/' color='black'>Click Here to Home</Link>
              

            </Form>
          </div>
        </Col>


      </Row>


    </div>
  )
}

export default Register;