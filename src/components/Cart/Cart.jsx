import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';


export default function Cart({ selectedMembers, totalCost, remaingBalance, handleRemoveMember }) {

  return (
    <div className="md:w-1/3">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="mt-10">

        {
          selectedMembers && <div className="bg-gray-50 p-4 mb-3 rounded-md">
            <h3 className="font-bold">Total hired members: {selectedMembers.length}</h3></div>
        }

        <ol className="list-decimal">
          {
            selectedMembers && selectedMembers.map((selectedMember, idx) => <CartItem key={idx} selectedMember={selectedMember} idx={idx} handleRemoveMember={handleRemoveMember}></CartItem>)
          }
        </ol>
      </div>

      <div className="text-center font-bold p-3 bg-gray-50 rounded-md border-purple-300 border-2">
        <h2>Total cost: <span className="text-red-500">${totalCost}</span></h2>
        <h2>Remaining balance: <span className="text-green-500">${remaingBalance}</span></h2>
      </div>

    </div>
  )
}

Cart.propTypes = {
  selectedMembers: PropTypes.array.isRequired,
  totalCost: PropTypes.number,
  remaingBalance: PropTypes.number,
  handleRemoveMember: PropTypes.func
}