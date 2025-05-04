'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addUserSchema, addUserType } from "@/schemas/user.schemas";
import useStorage from "@/hooks/useStorage";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddStudentPage() {
  const router = useRouter();
  const form = useForm<addUserType>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      name: "",
      averageGrade: "1.00",
      className: "",
    },
  });
  const { handleSubmit, control } = form;
  const [classes, setClasses] = useStorage("classes");
  const [students, setStudents] = useStorage("students");

  const onSubmit = async (data: addUserType) => {
    setStudents([...students, data])
    alert("Student added successfully");
    router.push("/");
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="averageGrade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Grade</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Average Grade" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="className"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((className: string, index: number) => (
                        <SelectItem key={index} value={className}>
                          {className}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Add Student
          </Button>
        </form>
      </Form>
      <Link className="underline text-blue-600" href="/">&lt; Back to home page</Link>
    </>
  );
}