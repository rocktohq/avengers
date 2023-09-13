import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export default function Cards({ handleSelectedMember }) {

  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setAvengers(data))
  }, [])

  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl font-bold">All Avengers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        {
          avengers.map((avenger, idx) => <Card key={idx} avenger={avenger} handleSelectedMember={handleSelectedMember}></Card>)
        }
      </div>
    </div>
  )
}

Cards.propTypes = {
  handleSelectedMember: PropTypes.func.isRequired
}