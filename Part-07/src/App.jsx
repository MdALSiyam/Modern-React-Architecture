import { useFetch } from './useFetch';

export default function CustomHookDemo() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <p>Loading user...</p>;

  return (
    <div>
      <h2>Level 7: Custom Hook Output</h2>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
    </div>
  );
}