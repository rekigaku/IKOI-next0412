// WeeklyReportPage.js
"use client"

import styles from './weekly.module.css'; // Importing CSS module

export default function WeeklyReport({ customer_id, customer_name, age, gender }) {
  return (
    <>
      <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
          <div className="card-body">
              <h2 className="card-title">{customer_name}さん</h2>
              <p>Customer ID: {customer_id}</p>
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
          </div>
      </div>
  

<div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className={`${styles.card} card mx-auto`}>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-6">先週のアクションレポート</h2>
            <p className="text-center text-xl mb-10 italic">{customer_name}さん今週は色々な人に挨拶をしてコミュニケーションをとりましたね。今週は積極的に質問するようにしましょう。</p>
            <p>Customer ID: {customer_id}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p className="text-center text-xl mb-6">【今週の強化アクション】</p>
            <p className="text-center mt-4 text-2xl font-bold pt-50 mb-10">遮らずに相手の話を聞こう</p>
            
            <div className={styles.progressBarContainer}>
              <div className={`${styles.progressBar}`} style={{ width: '40%' }}>
                40%
              </div>
            </div>
          </div>
        </div>
      </div>

</>
  )
}
