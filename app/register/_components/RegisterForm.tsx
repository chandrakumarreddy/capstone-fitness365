"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = async (values: any) => {
  const response = await fetch(`/api/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }),
  });
  const json = await response.json();
  console.log(response);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegisterForm() {
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      autoCorrect="false"
      className="w-[464px]"
      layout="vertical"
    >
      <h1 className="text-4xl mb-16 font-bold">Register here</h1>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input className="h-10" placeholder="Email" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="h-10" placeholder="Password" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="h-10" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-sky-600 !h-10"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
