import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

const UserArray = [
  { uName: 'Noila', uSurname: 'Sotvoldiyeva' },
  { uName: 'Rozivoy', uSurname: 'Roziqov' },
  { uName: 'Ruxshona', uSurname: "Yo'ldasheva" },
  { uName: 'Olimjon', uSurname: "Abdullayev" },
  { uName: 'Omadbek', uSurname: 'Xoshimov' },
  { uName: 'Durdona', uSurname: 'Aripova' },
  { uName: 'Asadbek', uSurname: "To'lqinov" },
  { uName: 'Jamolbek', uSurname: 'Yusufjanov' },
  { uName: 'Kamoldin', uSurname: 'Yusufjonov' }
];

const Login = () => {
  const navigate = useNavigate();  
  const fnLogin = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const surname = e.target.surname.value;

    const userExists = UserArray.find(
      (user) => user.uName === name && user.uSurname === surname
    );

    if (userExists) {
      navigate('/');  
      window.localStorage.setItem('token', 'zxcvbnm');  
    } else {
      navigate('/login');  
    }
  };

  return (
    <div>
      <form onSubmit={fnLogin} className='form-control w-50 m-auto' action="#">
        <h2>You can enter my web-site with your Name and Surname. If you cant just type mines</h2>
        <input className='form-control mb-3' type="text" placeholder='Name' name='username' />
        <input className='form-control mb-3' type="text" placeholder='Surname' name='surname' />
        <button className='btn btn-info' type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default Login;