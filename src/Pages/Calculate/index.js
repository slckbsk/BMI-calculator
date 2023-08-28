import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import Result from "../Result/svgGenerator";
import "./calculate.css";

const App = () => {
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
    const storedBMI = localStorage.getItem("records");
    console.log(storedBMI);
  }, []);

  const onFinish = (values) => {
    const { username, height, weight } = values;
    const heightInCM = parseInt(height);
    const weightInKG = parseInt(weight);

    if (heightInCM > 0 && weightInKG > 0) {
      const bmiValue = (weightInKG / (heightInCM / 100) ** 2).toFixed(2);

      const newRecord = {
        username,
        bmi: bmiValue,
        timestamp: new Date().toLocaleString(),
      };

      const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
      const updatedRecords = [...storedRecords, newRecord];
      localStorage.setItem("records", JSON.stringify(updatedRecords));

      setBMI(bmiValue);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      id="main"
      className="split-screen-container"
      style={{
        overflowY: "scroll",
        background: "white",
      }}
    >
      <div className="left-pane">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h3>BODY MASS INDEX CALCULATOR</h3>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Height (cm)"
            name="height"
            rules={[
              {
                required: true,
                message: "Please input your Height!",
              },
              {
                message: "Only number!",
                validator: (_, value) => {
                  if (/^[0-9]+$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("Some message here");
                  }
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Weight (kg)"
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input your Weight!",
              },
              {
                message: "Only number!",
                validator: (_, value) => {
                  if (/^[0-9]+$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("Some message here");
                  }
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="BMI">
            <Input value={bmi || ""} readOnly />{" "}
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="right-pane">
        <Result BMI={bmi} />
      </div>
    </div>
  );
};
export default App;
