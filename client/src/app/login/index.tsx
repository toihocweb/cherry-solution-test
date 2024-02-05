import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginDto, loginSchema } from '../lib/validators';
import axios from 'axios';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

const Login = () => {
  const setAuthenticated = useAuth((state) => state.setAuthenticated);
  const navigate = useNavigate();
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  });

  const onSubmit = async (values: LoginDto) => {
    const res = await axios
      .post('https://dummyjson.com/auth/login', values)
      .catch((err) => {
        alert(err.response.data.message);
        return;
      });
    if (!res) return;
    setAuthenticated(true);
    navigate('/products');
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 mx-auto">
        <h2 className="text-2xl text-center mb-4">Login Page</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex mt-4">
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
