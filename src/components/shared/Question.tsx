"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  type: z.string(),
});

function QuestionCard(props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: props.value || "",
    },
  });

  // Sync external value to form when parent updates
  useEffect(() => {
    form.setValue("type", props.value || "");
  }, [props.value, form]);

  const handleChange = (value) => {
    form.setValue("type", value);
    props.onChange(value); // Notify parent of selection
  };

  return (
    <Card className="border-2 border-blue-500 w-[300px]">
      <Form {...form}>
        <form className="w-full space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  <CardHeader>
                    <CardTitle>{props.question}</CardTitle>
                    <CardDescription>
                      Little interest or pleasure in doing things
                    </CardDescription>
                  </CardHeader>
                </FormLabel>
                <CardContent>
                  <FormControl>
                    <RadioGroup
                      onValueChange={handleChange}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {[props.a1, props.a2, props.a3, props.a4].map(
                        (answer, index) => (
                          <FormItem
                            key={index}
                            className="flex items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={answer} />
                            </FormControl>
                            <FormLabel>{answer}</FormLabel>
                          </FormItem>
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </CardContent>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Card>
  );
}

export default QuestionCard;
