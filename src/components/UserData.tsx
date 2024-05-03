
type UserDataProps = {
  currentUserData: any
  handleLogOut:() => void
}
const UserData = ({ currentUserData, handleLogOut }: UserDataProps) => {
  return (
    <div className='h-[100vh] flex flex-col  font-semibold items-center  bg-black text-yellow-400 '>
      <div className=' capitalize tracking-[2px] font-serif mt-[50px] font-bold text-[40px]'>
        Hey {currentUserData.firstName} {currentUserData.lastName}
      </div>
      <div className=' capitalize mt-5 text-3xl'>
        your successfuly login in our website
      </div>

      <div className=' mt-16 text-2xl '>Your Details</div>

      <div className='capitalize text-xl mt-7 mb-2 '>
        name : {currentUserData.firstName} {currentUserData.lastName}
      </div>
      <div className='text-xl'>Email : {currentUserData.email}</div>
      <button
        className='mt-[100px] text-white text-2xl '
        onClick={() => {
          handleLogOut()
        }}>
        Log Out
      </button>
    </div>
  )
}

export default UserData
