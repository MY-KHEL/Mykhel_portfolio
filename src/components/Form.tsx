"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"


const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Kindly enter your name",
  }),
  emailAddress: z.string().email({
    message:"Invalid Email Address"
  }),
    content: z.string()
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      content: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
        
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-white/50">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Full Name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-white/50">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email Address" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/50">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-white hover:bg-white/80 text-black">Submit</Button>
      </form>
    </Form>
  )
}