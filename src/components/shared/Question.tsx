"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createQuestionAnswer } from "@/lib/services/api/questionAnswer";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const FormSchema = z.object({
  type: z.string(),
});

function QuestionCard(props) {
  const { user } = useUser();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Submitted Data:", data);
    if (data) {
      const id = props._id;
      createQuestionAnswer({
        data: data.type,
        id: id,
        userId: user.id,
      });

      alert(`Question ${id} is Success!`);
    } else {
    }
  }

  function handleReset() {
    form.resetField("type"); // Reset all form values
  }

  return (
    <Card className="border-2 border-blue-500 w-[300px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  <CardHeader>
                    <CardTitle>{props.question} </CardTitle>
                    <CardDescription>
                      {" "}
                      Little Interest or pleasure in doing things{" "}
                    </CardDescription>
                  </CardHeader>
                </FormLabel>
                <CardContent>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={props.a1} />
                        </FormControl>
                        <FormLabel>{props.a1}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={props.a2} />
                        </FormControl>
                        <FormLabel>{props.a2}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={props.a3} />
                        </FormControl>
                        <FormLabel>{props.a3}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={props.a4} />
                        </FormControl>
                        <FormLabel>{props.a4}</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </CardContent>
                <FormMessage />
              </FormItem>
            )}
          />
          <CardFooter className="flex justify-between">
            <Button type="submit">Submit</Button>
            <Button
              className="w-fit bg-transparent hover:bg-transparent border text-black"
              type="button"
              onClick={handleReset}
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

export default QuestionCard;
