import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

type BasicPopoverProps = {
  onChange: (list: any) => void
  handleModal: () => void
  handleDelete: (id: any) => void
  list: any
  handleClick: (event: any) => void
  handleClose: () => void
  anchorEl: any
}

const BasicPopover = ({
  anchorEl,
  handleModal,
  handleDelete,
  onChange,
  list,
  handleClick,
  handleClose,
}: BasicPopoverProps) => {
  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      <BsThreeDotsVertical
        className="cursor-pointer"
        aria-describedby={id}
        onClick={(e: any) => {
          onChange(list)
          handleClick(e)
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Typography>
          <div className='grid grid-flow-col place-items-center px-2 gap-4'>
            <button
              onClick={() => {
                handleModal()
              }}>
              Edit
            </button>
            <MdDelete onClick={() => handleDelete(list.id)} />
          </div>
        </Typography>
      </Popover>
    </div>
  )
}

export default BasicPopover
