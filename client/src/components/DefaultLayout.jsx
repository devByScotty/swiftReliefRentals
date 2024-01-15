import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';

const DefaultLayout = (props) => {
  // Parse user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if user is not null before accessing its properties
  const username = user ? user.username : null;

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login';
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className='header bs1'>
        <Row justify='center' gutter={16}>
          <Col lg={20} sm={24} xs={24}>
            <div className='headerContainer'>

              <div>
                <h1>Swift</h1>
              </div>


              <nav class="navbar">
                <ul class="navbar-list">

                <li>

                    <Link to='/'>
                      <a href="#home" class="navbar-link">Home</a>
                    </Link>
                  </li>
                      

                  <li>
                  <Link to='/rent'>
                    <a href="#featured-car" class="navbar-link" >Rent</a>
                    </Link>

                  </li>

                  <li>
                  <Link to='/userbookings'>
                    <a href="#" class="navbar-link">MyBookings</a>
                    </Link>
                  </li>


                </ul>
              </nav>

              <Dropdown overlay={menu} placement='bottomCenter'>
                <Button>{username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content'>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;