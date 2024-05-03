import Button from "../lib/Button"

type headerprops = {
  adminModal: () => void
  userModal: () => void
  currentUserData: any
  handleLogOut:() => void
}

export default function MembersHeader({
  adminModal,
  userModal,
  currentUserData,
  handleLogOut
}: headerprops) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='grid gap-7 grid-flow-col'>
          <h1 className='text-base  font-medium'>Members</h1>
          <button
            onClick={() => {handleLogOut()}}
            className='font-semibold px-3 text-[13px] bg-blue-500 text-white text-center rounded-md '
          >
            Log Out
          </button>
        </div>
        <div className='flex items-center gap-5'>
          {currentUserData.isSuperAdmin ? (
            <Button className='bg-gray-300' onClick={() => adminModal()}>
              + create admin
            </Button>
          ) : (
            ""
          )}
          <Button
            className='bg-blue-500 text-white'
            onClick={() => userModal()}>
            Create User
          </Button>
        </div>
      </div>
    </>
  )
}
