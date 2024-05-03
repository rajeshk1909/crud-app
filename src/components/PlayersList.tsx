import { IoIosHelp } from "react-icons/io"
import Avatar from "./Avatar"
import BasicPopover from "./BasicPopover"

type PlayersListProps = {
  values: any
  onChange: (values: any) => void
  MembersList: any[]
  handleModal: () => void
  handleDelete: (id: any) => void
  handleClose: () => void
  handleClick: (event: any) => void
  currentUserData: any
  anchorEl: any
}

const PlayersList = (props: PlayersListProps) => {
  const {
    onChange,
    MembersList,
    handleModal,
    handleDelete,
    currentUserData,
    handleClose,
    handleClick,
    anchorEl,
  } = props

  const userList = MembersList.filter((list) => list.teams === "user")
  const membersData = currentUserData.isSuperAdmin ? MembersList : userList

  return (
    <div className='bg-white rounded-md my-3 p-2 shadow-lg'>
      {/* headings */}
      <div className='flex py-2 font-semibold justify-evenly bg-gray-100 rounded text-[12px] items-center'>
        <div>Name</div>
        <div className=' flex gap-1 items-center'>
          Role <IoIosHelp className='text-[22px]' />
        </div>
        <div>Status</div>
        <div>teams</div>
      </div>
      {/* members  */}

      {membersData.length > 0 &&
        membersData.map((list) => {
          return (
            <div key={list.id}>
              <div className='flex justify-evenly items-center py-2 border-b'>
                <div className='flex items-center  min-w-[400px]'>
                  <Avatar firstname={list.firstname} lastname={list.lastname} />
                  <div>
                    <div className='capitalize'>
                      {list.firstname} {list.lastname}
                    </div>
                    <div>{list.email}</div>
                  </div>
                </div>

                <div className='min-w-[270px] capitalize'>{list.role}</div>
                <div className='min-w-[220px]'>
                  {list.status === 1 ? "Active" : "Inactive"}
                </div>
                <div className='min-w-[120px]'>{list.teams}</div>
                <div className='min-w-[100px]'>
                  <div>
                    <BasicPopover
                      anchorEl={anchorEl}
                      handleClose={handleClose}
                      handleClick={handleClick}
                      list={list}
                      onChange={onChange}
                      handleDelete={handleDelete}
                      handleModal={handleModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PlayersList
