import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosClient } from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { ADMIN_DASHBOARD_ROUTE, STUDENT_DASHBOARD_ROUTE, TEACHER_DASHBOARD_ROUTE } from '../../router'
import {Loader} from 'lucide-react'
import { useUserContext } from '../../context/StudentContext'




const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})
export default function UserLogin() {
  const navigate = useNavigate()
  const {login,setAuthenticated,setToken} = useUserContext()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: 'fayssal@hhh.ppto',
            password: 'azertyazerty',
        }
    })
    const {setError, formState:{isSubmitting}} = form
     
      // 2. Define a submit handler.
      const onSubmit = async (values) => {
        await login(values.email, values.password).then(({status,data})=>{
          if(status === 200){
              setToken(data.token)
              setAuthenticated(true)
              const {role} = data.user
              switch(role){
                case 'student':
                  navigate(STUDENT_DASHBOARD_ROUTE)
                  break;
                case 'admin':
                  navigate(ADMIN_DASHBOARD_ROUTE)
                  break;
                case 'teacher':
                  navigate(TEACHER_DASHBOARD_ROUTE)
                  break;
              }
              // navigate(STUDENT_DASHBOARD_ROUTE)
          }
        }
      ).catch( ({response})=>
        setError('email',{
          message: response.data.errors.email.join()
        })
      )

      }
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <Loader className={'mx-2 my-2 animate-spin'} /> : 'Submit'} 
        </Button>
      </form>
    </Form>
    </>
  )
}
