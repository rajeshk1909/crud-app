import Button from "../lib/Button"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import PlayersInformations from "./PlayersInformations"
import { IoMdClose } from "react-icons/io"

type Modelprops = {
  type: "admin" | "user" | "edit"
  values: any
  handleModelPopUp: () => void
  onChange: (key: string, e: any) => void
  handleSubmit: (value: any, e: any, type: string) => void
  handleClose: () => void
}

const CreateModel = ({
  type,
  values,
  handleModelPopUp,
  onChange,
  handleSubmit,
  handleClose,
}: Modelprops) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => {
          handleModelPopUp()
          handleClose()
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box className='w-[700px] bg-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md border border-gray-100 outline-none'>
          <div className='mx-5 my-2 flex justify-between'>
            <div>
              <h1 className='font-bold'>
                {type === "admin"
                  ? "Create Admin"
                  : type === "user"
                  ? "Create User"
                  : "Edit"}
              </h1>
              <p className='text-[12px]'>
                {type === "edit"
                  ? "Edit detail informations for the employee."
                  : "Enter new details and informations to send invite link."}
              </p>
            </div>
            <div>
              <IoMdClose
                className='cursor-pointer'
                onClick={() => {
                  handleModelPopUp()
                  handleClose()
                }}
              />
            </div>
          </div>

          <form action=''>
            <PlayersInformations
              values={values}
              ModalTitle={type}
              onChange={onChange}
            />

            <div className='grid place-content-end grid-flow-col gap-5 mr-5 mt-10 mb-5'>
              <Button
                className='bg-gray-300'
                onClick={() => {
                  handleModelPopUp()
                }}>
                cancel
              </Button>
              <Button
                className='bg-blue-500 text-white'
                onClick={(e) => {
                  handleSubmit(values, e, type)
                  handleModelPopUp()
                  handleClose()
                }}>
                submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateModel
