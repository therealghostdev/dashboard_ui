// CustomerList.jsx
import propTypes from "prop-types";

const CustomerList = ({ customers, onCustomerSelect, selectedCustomer }) => {
  return (
    <div className="space-y-4 w-full">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
            selectedCustomer?.id === customer.id
              ? "bg-blue-50"
              : "hover:bg-gray-50"
          }`}
          onClick={() => onCustomerSelect(customer)}
        >
          <img
            src={customer.image}
            alt={customer.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div role="button">
            <h3 className="font-bold text-md text-[#1E293B]">{customer.name}</h3>
            <p className="text-sm text-[#64748B]">{customer.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;

CustomerList.propTypes = {
  customers: propTypes.array.isRequired,
  onCustomerSelect: propTypes.func.isRequired,
  selectedCustomer: propTypes.array.isRequired,
};
