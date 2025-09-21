import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      <div className="space-y-2 text-gray-600 text-sm">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
        <p>
          <span className="font-medium">Company:</span> {company.name}
        </p>
        <p>
          <span className="font-medium">Address:</span>{" "}
          {`${address.suite}, ${address.street}, ${address.city}`}
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-500">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
