'use client'

import { useEffect, useState } from 'react';
// Next.js 12以上でappディレクトリに適用される新しいルーティングフックを使用
import { useRouter } from 'next/navigation';
import fetchCustomer from './fetchCustomer';
import WeeklyReport from 'src/app/components/ikoa_weekly_card.jsx';
import BackButton from './back_button';

export default function ReadPage() {
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // ルーターが準備完了になったらIDを取得し、顧客情報をフェッチする
    if (router.isReady) {
      const id = router.query.id; // `id`はクエリから直接取得
      if (id) {
        const fetchAndSetCustomer = async () => {
          try {
            const customerData = await fetchCustomer(id);
            setCustomerInfo(customerData);
          } catch (e) {
            setError(e.message);
          }
        };

        fetchAndSetCustomer();
      }
    }
  // router.isReadyとrouter.queryを依存配列に追加
  }, [router.isReady, router.query]);

  // エラーがある場合はエラーメッセージを表示
  if (error) {
    return <div>Error: {error}</div>;
  }

  // customerInfoがまだない場合はローディングメッセージを表示
  if (!customerInfo) {
    return <div>Loading...</div>;
  }

  // customerInfoが存在する場合は、顧客情報と戻るボタンを表示
  return (
    <div className="card bordered bg-white border-white border-2 max-w-full m-4">
      {customerInfo && <WeeklyReport {...customerInfo} />}
      <BackButton>戻る</BackButton>
    </div>
  );
}





// "use client"
// import WeeklyReport from "src/app/components/ikoa_weekly_card.jsx"
// import BackButton from "./back_button";
// import fetchCustomer from "./fetchCustomer";
// import { useEffect, useState } from 'react';

// export default function ReadPage(props) {
//   const id = props.params.id;

//   const [customerInfo, setCustomerInfo] = useState([]);

//   useEffect(() => {
//       const fetchAndSetCustomer = async () => {
//           const customerData = await fetchCustomer(id);
//           setCustomerInfo(customerData);
//       };
//       fetchAndSetCustomer();
//   }, []);


//   return (
//     <>
//       <div className="card bordered bg-white border-white border-2 max-w-full m-4">
//         <WeeklyReport {...customerInfo[0]} />
//         {/*この意味が不明　<WeeklyReport {...customerInfo[0]} /> */}
//         <BackButton>戻る</BackButton>
//       </div>

//     </>
//   )
// }

