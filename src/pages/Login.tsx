import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ghibliImage from '../assets/ghibli-bg.jpg'; // Gambar latar Ghibli

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      localStorage.setItem('auth_token', 'fake_token');
      navigate('/');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-green-100">
      <div className="bg-white rounded-lg shadow-xl flex overflow-hidden max-w-4xl">
        {/* Bagian Kiri - Gambar */}
        <div className="hidden md:block w-1/2">
          <img src={ghibliImage} alt="Ghibli Background" className="w-full h-full object-cover" />
        </div>

        {/* Bagian Kanan - Form Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-green-600 text-center">Welcome Back!</h2>
          <p className="text-gray-500 text-center mb-6">Studio Ghibli Wiki</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-300"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
