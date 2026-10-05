// Component & Props Basic
function UserCard({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Level 1: Basic Components & Props</h1>
      <UserCard name="Rahim" role="Frontend Developer" />
      <UserCard name="Karim" role="UI/UX Designer" />
    </div>
  );
}