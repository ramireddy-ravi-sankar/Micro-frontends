import React from 'react';
import { Card, Input, Button, Checkbox, Form } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  jobTitle: string;
  message: string;
  attachments: FileList;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log('Form values:', data);
  };

  return (
    <Card title="Contact Us" bordered={false} style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <p>Please fill out the form below to get in touch with our team.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Name" validateStatus={errors.name ? 'error' : ''} help={errors.name?.message}>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Please enter your name' }}
                render={({ field }) => <Input {...field} placeholder="John Doe" />}
              />
            </Form.Item>
            <Form.Item label="Email" validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
              <Controller
                name="email"
                control={control}
                rules={{ required: 'Please enter your email', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Please enter a valid email' } }}
                render={({ field }) => <Input {...field} placeholder="john@example.com" />}
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Phone" validateStatus={errors.phone ? 'error' : ''} help={errors.phone?.message}>
              <Controller
                name="phone"
                control={control}
                rules={{ required: 'Please enter your phone number' }}
                render={({ field }) => <Input {...field} placeholder="(123) 456-7890" />}
              />
            </Form.Item>
            <Form.Item label="Address" validateStatus={errors.address ? 'error' : ''} help={errors.address?.message}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => <Input {...field} placeholder="123 Main St, Anytown USA" />}
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Company" validateStatus={errors.company ? 'error' : ''} help={errors.company?.message}>
              <Controller
                name="company"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Acme Inc." />}
              />
            </Form.Item>
            <Form.Item label="Job Title" validateStatus={errors.jobTitle ? 'error' : ''} help={errors.jobTitle?.message}>
              <Controller
                name="jobTitle"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Software Engineer" />}
              />
            </Form.Item>
          </div>
        </div>
        <div className="space-y-4">
          <Form.Item label="Message" validateStatus={errors.message ? 'error' : ''} help={errors.message?.message}>
            <Controller
              name="message"
              control={control}
              rules={{ required: 'Please enter your message' }}
              render={({ field }) => <TextArea {...field} rows={5} placeholder="How can we help you?" />}
            />
          </Form.Item>
          <Form.Item label="Attachments" validateStatus={errors.attachments ? 'error' : ''} help={errors.attachments?.message}>
            <Input type="file" {...register('attachments')} />
          </Form.Item>
          <Form.Item validateStatus={errors.consent ? 'error' : ''} help={errors.consent?.message}>
            <Controller
              name="consent"
              control={control}
              rules={{ required: 'You must agree to the terms and conditions' }}
              render={({ field }) => <Checkbox {...field}>I agree to the terms and conditions</Checkbox>}
            />
          </Form.Item>
        </div>
        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
    </Card>
  );
};

export default ContactForm;
