"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import { submitContactForm, type ContactFormState } from '@/app/contact-actions';
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full transition-transform hover:scale-105">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out.
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8 flex flex-col justify-center">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Contact Information</h3>
            <p className="text-muted-foreground flex items-center gap-3 mb-2">
              <MailIcon className="h-5 w-5 text-primary" />
              your.email@example.com
            </p>
            {/* Add more contact info if needed, like phone or address */}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary">
                <Link href="#" target="_blank" aria-label="GitHub">
                  <GithubIcon className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary">
                <Link href="#" target="_blank" aria-label="LinkedIn">
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary">
                <Link href="#" target="_blank" aria-label="Twitter">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
