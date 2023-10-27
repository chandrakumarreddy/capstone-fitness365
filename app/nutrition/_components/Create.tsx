"use client";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

export default function Create() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        type="primary"
        className="bg-sky-500 !h-10 w-fit"
        onClick={() => setOpen(true)}
      >
        Add Nutrition Tip
      </Button>
      <Modal
        key={+open}
        title="Add Nutrition tip"
        centered
        open={open}
        footer={null}
        width={600}
        onCancel={() => setOpen(false)}
      >
        <Form layout="vertical" name="control-ref" className="w-full mt-6">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true }]}
            className="mb-4"
          >
            <Input className="h-10" />
          </Form.Item>
          <Form.Item
            name="Description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button
              htmlType="button"
              className="mr-4"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
