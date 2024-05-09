'use client'
import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const CreateForm = (props) => {
    const { visible, setVisible, onCreate } = props;
    const [form] = Form.useForm();

    const handleCreate = () => {
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onCreate(values);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };
    return (
        <Modal
            visible={visible}
            title="Booking a table"
            okText="Ok"
            onCancel={() => {
                setVisible(false);
            }}
            onOk={handleCreate}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: "Please input your name!" }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        { required: true, message: "Please input your email!" }
                    ]}
                >
                    <Input type="email" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        { required: true, message: "Please input your phone!" }
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="Time"
                    name="time"
                    rules={[
                        { required: true, message: "Please input your time!" }
                    ]}
                >
                    <Input type="datetime-local" />
                </Form.Item>
                
                <Form.Item name="note" label="Note">
                    <Input type="textarea" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const FormModal = ({ onChange }) => {
    // const { onChange } = props;
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        onChange(values);
        setVisible(false);
    };

    return (
        <div>
            <button className='w-[180px] my-5 h-[50px] font-bold rounded-full hover:bg-red-700 bg-red-500 text-white text-center'
                    onClick={() => {
                        setVisible(true);
                    }}            
            >
                BOOK A TABLE
            </button>
            <CreateForm
                visible={visible}
                setVisible={setVisible}
                onCreate={onCreate}
            />
        </div>
    );
};