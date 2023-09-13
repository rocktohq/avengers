import PropTypes from 'prop-types';

export default function CartItem({ selectedMember, idx, handleRemoveMember }) {
  const { name, salary } = selectedMember;
  return (
    <li className="flex justify-between bg-base-100 p-4 mb-3 rounded-md relative">
      <h3 className="font-semibold">{idx + 1}. {name}</h3>
      <p className="text-red-500 font-medium">${salary}</p>
      <p onClick={() => handleRemoveMember(selectedMember)} className="absolute px-2 bg-red-500 hover:bg-red-600 text-white rounded-full -top-1 -right-1 cursor-pointer">X</p>
    </li>
  )
}

CartItem.propTypes = {
  selectedMember: PropTypes.object.isRequired,
  idx: PropTypes.number,
  handleRemoveMember: PropTypes.func
}