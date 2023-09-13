import PropTypes from 'prop-types';

export default function Card({ avenger, handleSelectedMember }) {
  const { name, image, salary, role } = avenger;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl rounded-lg p-5 space-y-3">
      <figure className="">
        <img className="w-20 h-20 rounded-full" src={image} alt="" />
      </figure>
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p className="font-medium flex justify-evenly">
        <span className="font-semibold">Salary: <span className="text-gray-500">${salary}</span></span>
        <span className="bg-purple-700 text-white px-2 rounded">{role}</span>
      </p>
      <div className="card-action text-center">
        <button onClick={() => handleSelectedMember(avenger)} className="btn btn-primary rounded mt-3">Select</button>
      </div>
    </div>
  )
}


Card.propTypes = {
  avenger: PropTypes.object.isRequired,
  handleSelectedMember: PropTypes.func.isRequired
}