type TBtn = {
  text: string
}
function Btn({text}: TBtn) {
  return (
    <button className="py-[11px] hover:bg-white hover:text-black hover:border-black px-[22px] border transition-all rounded-[30px]">
      {text}
    </button>
  )
}
export default Btn
