import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setErrorMessage("All fields are required!");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const jsonData = await res.json();
        setLoading(false);
        return setErrorMessage(jsonData.message || "Sign-in failed");
      }

      const jsonData = await res.json();
      setLoading(false);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ marginTop: '150px' }}>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <Link to="/" className='font-bold dark:text-white text-7xl'>
              <span className="">Blog</span>
              <span className="text-violet-500">Nest</span>
            </Link>
            <p className='text-sm mt-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="flex-1 max-w-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your Email" />
                <TextInput
                  type="text"
                  placeholder="name@gmail.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                style={{ background: 'linear-gradient(135deg, #7F00FF, #E100FF)' }}
                type="submit" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button> 
            </form>
            <div className='flex gap-2 text-sm mt-2'>
              <span>Don't have an account? </span>
              <Link to="/sign-up" className='text-blue-600 font-semibold'>
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
