// app>test>page.tsx
export async function getServerSideProps() {
  // データフェッチロジックをここに移動
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const resp = await fetch(url, { cache: 'no-store' });
  const result = await resp.json();

  // ページコンポーネントにpropsとして渡すデータをreturn
  return {
    props: { posts: result }, // 例
  };
}

export default function Home({ posts }) {
  return (
    <main>
      <h1 className="title">Index page</h1>
      {/* データを使用してUIをレンダリング */}
    </main>
  );
}
