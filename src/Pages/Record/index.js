import React, { useState, useEffect } from "react";
import { Table } from "antd";

function Record() {
  const [data, setRecords, setData] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(storedRecords);
  }, [setRecords]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "BMI",
      dataIndex: "bmi",
      key: "bmi",
    },
    {
      title: "Date",
      dataIndex: "timestamp",
      key: "timestamp",
    },
  ];

  return (
    <div
      id="main"
      style={{
        overflowY: "scroll",
      }}
    >
      {data.length >= 0 && (
        <div>
          <h3>All Records:</h3>
          <Table
            columns={columns}
            dataSource={data.map((item) => ({ ...item, key: item.timestamp }))}
            pagination={false}
            onChange={handleTableChange}
          />
        </div>
      )}
    </div>
  );
}

export default Record;
