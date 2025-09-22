import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    parent: "company" | "address"
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [parent]: { ...prev[parent], [name]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user as any); // quick fix to satisfy the type checker
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Nested fields */}
          <input
            type="text"
            name="name"
            value={user.company.name}
            onChange={(e) => handleNestedChange(e, "company")}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="street"
            value={user.address.street}
            onChange={(e) => handleNestedChange(e, "address")}
            placeholder="Street"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="city"
            value={user.address.city}
            onChange={(e) => handleNestedChange(e, "address")}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="zipcode"
            value={user.address.zipcode}
            onChange={(e) => handleNestedChange(e, "address")}
            placeholder="Zip Code"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
