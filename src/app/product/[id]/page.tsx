export default function Product({params}:{params:{id: string}}) {
  const { id } = params;
  return (
    <main className='grow'>
      <p>Product {id}</p>
    </main>
  );
}
