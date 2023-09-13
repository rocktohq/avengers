import PropTypes from 'prop-types';

export default function CartItem({ selectedMember, idx }) {
  const { name, salary } = selectedMember;
  return (
    <li className="flex justify-between bg-base-100 p-3 mb-3 rounded-md">
      <h3 className="font-semibold">{idx + 1}. {name}</h3>
      <p className="text-red-500 font-medium">${salary}</p>
    </li>
  )
}

CartItem.propTypes = {
  selectedMember: PropTypes.object.isRequired,
  idx: PropTypes.number
}