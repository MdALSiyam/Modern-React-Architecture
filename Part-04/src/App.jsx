import { useState } from 'react';

export default function SimpleForm() {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.username}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Level 4: Form Handling</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <br /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}