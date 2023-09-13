import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const budget = 50000;

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaingBalance, setRemaingBalance] = useState(0);

  const handleSelectedMember = (selectedMember) => {
    const newSelectedMembers = [...selectedMembers, selectedMember];
    const alreadySelected = selectedMembers.find(member => member.id === selectedMember.id);

    if (alreadySelected) return alert("Error: Member already selected!");

    let cost = selectedMember.salary;
    selectedMembers.forEach(selectedMember => cost += selectedMember.salary);
    if (cost > budget) return alert("Error: Total cost exceeds your badget!");

    setTotalCost(cost);
    setRemaingBalance(budget - cost);
    setSelectedMembers(newSelectedMembers);
  }

  return (
    <>
      <Header></Header>
      <main className="max-w-screen-xl mx-auto px-2 my-12 flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10">
        <Cards handleSelectedMember={handleSelectedMember} ></Cards>
        <Cart selectedMembers={selectedMembers} totalCost={totalCost} remaingBalance={remaingBalance}></Cart>
      </main>
      <Footer></Footer>
    </>
  )
}
export default App;