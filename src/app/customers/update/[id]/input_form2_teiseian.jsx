import React, { useState } from 'react';

export default function InputForm({ updateCustomerFunc, customerInfo }) {
  const [customerName, setCustomerName] = useState(customerInfo[0].customer_name);
  const [customerId, setCustomerId] = useState(customerInfo[0].customer_id);
  const [age, setAge] = useState(customerInfo[0].age);
  const [gender, setGender] = useState(customerInfo[0].gender);
  
  const handleSubmit = (event) => {
    event.preventDefault(); // デフォルトの送信を阻止

    // ここでバリデーションを実行
    if (!customerId) {
      alert('Customer IDは必須です。');
      return; // IDが空の場合、ここで処理を中断
    }

    // 他のバリデーションもここで...

    // バリデーションが通ったら更新関数を呼び出し
    updateCustomerFunc({ customerName, customerId, age, gender });
  };

  return (
    <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h2 className="card-title">
            <input
              type="text"
              name="customer_name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="input input-bordered"
            />さん
          </h2>
          <p>
            Customer ID:
            <input
              type="text"
              name="customer_id"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="input input-bordered"
            />
          </p>
          <p>
            Age:
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-bordered"
            />
          </p>
          <p>
            Gender:
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input input-bordered"
            />
          </p>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary m-4 text-2xl">
              更新
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
