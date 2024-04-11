"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import fetchCustomers from './fetchCustomer';
import Link from 'next/link';



const LoginPage = () => {
  const [customerId, setCustomerId] = useState(''); // customerId ステートの宣言
  const [password, setPassword] = useState('');
  const [customers, setCustomers] = useState([]); // customers ステートの宣言
  const router = useRouter();

  useEffect(() => {
    const getCustomers = async () => {
      try {
        console.log('Fetching customers...');
        const fetchedCustomers = await fetchCustomers();
        console.log('Customers fetched:', fetchedCustomers); // 取得した顧客データを出力
        setCustomers(fetchedCustomers);
      } catch (error) {
        console.error('Failed to fetch customers', error);
      }
    };

    getCustomers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted with:', customerId, password); // フォーム送信情報を出力
  
    const customerExists = customers.some(customer => customer.customer_id === customerId);
    console.log('Customer exists:', customerExists); // 顧客の存在をチェック
  
    if (customerExists && password === "Tech0") {
      // IDが存在し、パスワードが正しい場合、顧客の詳細ページにリダイレクトする
      router.push(`/customers/read2/${customerId}`);
    } else {
      // ログインに失敗した場合の処理
      alert('ログイン失敗: IDまたはパスワードが間違っています');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            IKOI login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="customer_id" className="sr-only">Customer ID</label>
              <input id="customer_id" name="customer_id" type="text" autoComplete="customer-_d" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
         
          
          {/* <button type="submit" className="btn btn-neutral w-full border-0 bg-blue-200 text-black hover:text-white">ログイン</button> */}
          
          </form>

          {/* 上記のログインが機能しないので、 今回はLINKで対応　⇒　出来れば訂正　*/}
          
          <Link href="/customers" passHref>
          <button type="submit" className="btn btn-neutral w-full border-0 bg-blue-200 text-black hover:text-white">ログイン</button>
          </Link>

        
      </div>
    </div>
  );
};

export default LoginPage;

