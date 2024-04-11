"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import './create2.css';

import createCustomer from './createCustomer';


export default function CreatePage() {
    const formRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        // Customer IDの入力をチェック
        if (!formData.get("customer_id")) {
            alert('Customer IDは必須です。');
            return; // Customer IDが空の場合はここで処理を中止
        }
        
        await createCustomer(formData);
        router.push(`./create/confirm?customer_id=${formData.get("customer_id")}`);
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="card bordered bg-gray-100 border-blue-200 border-2 max-w-4xl m-4 shadow-lg">
                <div className="m-4 p-4 bg-white rounded-lg shadow-inner">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                <div className="card-body">
                    {/* "あいさつをした" のボタン */}
                    <div className="form-control">
                    <button type="button" className="btn btn-blue-500 m-2"
                            onClick={() => console.log('あいさつをした')}>あいさつをした</button>
                    </div>
                    
                    {/* "笑顔で接した" のボタン */}
                    <div className="form-control">
                    <button type="button" className="btn btn-blue-500 m-2"
                            onClick={() => console.log('笑顔で接した')}>笑顔で接した</button>
                    </div>
                    
                    {/* "遮らずに相手の話を聞いた" のボタン */}
                    <div className="form-control">
                    <button type="button" className="btn btn-blue-500 m-2"
                            onClick={() => console.log('遮らずに相手の話を聞いた')}>遮らずに相手の話を聞いた</button>
                    </div>
                    
                    {/* "目を見て話した" のボタン */}
                    <div className="form-control">
                    <button type="button" className="btn btn-blue-500 m-2"
                            onClick={() => console.log('目を見て話した')}>目を見て話した</button>
                    </div>
                    
                    {/* "状況や進捗確認の声かけをした" のボタン */}
                    <div className="form-control">
                    <button type="button" className="btn btn-blue-500 m-2"
                            onClick={() => console.log('状況や進捗確認の声かけをした')}>状況や進捗確認の声かけをした</button>
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <button type="submit" className="btn btn-primary m-4">送信</button>
                </div>
                </form>


                </div>
                </div>
            </div>
            </>

    )
}



