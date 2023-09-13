import Profile from "/girl1.jpg";

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto px-2 py-5 border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold"><span className="text-purple-700">A</span>vengers</h1>
        <img className="w-16 h-16 rounded-full" src={Profile} alt="" />
      </div>
    </header>
  )
}
