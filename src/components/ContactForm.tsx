import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.enum(['Investor', 'Stays'], {
    required_error: 'Please select your interest'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    toast.success('Thank you! We\'ll be in touch soon.');
    form.reset();

    const subject = `Contact from ${data.name} - ${data.interest} Interest`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nInterest: ${data.interest}\n\nMessage:\n${data.message}`;
    setTimeout(() => {
      window.open(`mailto:ivan@darienvillage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Get In <span className="text-brand-gradient">Touch</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          Ready to learn more about investment opportunities or planning your stay?
        </p>
      </div>

      <div className="glass-card-premium p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I'm interested in</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Investor">Investment Opportunities</SelectItem>
                      <SelectItem value="Stays">Short-term Stays</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your interests and any questions you have..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>

        <div className="mt-6 pt-6 border-t border-brand-sand/20 text-center">
          <p className="text-brand-gray text-sm mb-3">
            Prefer email? Contact us directly:
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('mailto:ivan@darienvillage.com', '_blank')}
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            ivan@darienvillage.com
          </Button>
        </div>
      </div>
    </div>
  );
};