type Playersprops = {
  ModalTitle: string
  values: any
  onChange: (key: string, e: any) => void
}

const PlayersInformations = ({
  ModalTitle,
  values,
  onChange,
}: Playersprops) => {
  return (
    <div className='mx-5 px-5 my-2 py-2 shadow-lg border rounded-md border-gray-300 '>
      <h1 className='font-semibold my-2 '>General Information</h1>

      {/* namesss */}

      <div className='grid grid-cols-2 gap-5 my-2 '>
        <div className='grid text-[13px]  grid-rows-2'>
          <label htmlFor='' className='mb-1'>
            Frist Name
          </label>
          <input
            type='text'
            className='outline-none px-1'
            value={values.first_name}
            onChange={(e) => {
              onChange("first_name", e)
            }}
          />
        </div>
        <div className='grid text-[13px] grid-rows-2'>
          <label htmlFor='' className='mb-1'>
            last Name
          </label>
          <input
            type='text'
            value={values.last_name}
            className='outline-none px-1'
            onChange={(e) => {
              onChange("last_name", e)
            }}
          />
        </div>
      </div>

      {/* email */}
      {ModalTitle === "edit" ? "" : (
        <div className='my-2 grid text-[13px] grid-rows-2'>
          <label htmlFor='' className='mb-1 text-[14px]'>
            email
          </label>
          <input
            type='mail'
            value={values.email}
            className='outline-none px-1'
            onChange={(e) => {
              onChange("email", e)
            }}
          />
        </div>
      )}

      {/* role & active status */}

      {ModalTitle === "user" ? (
        <div className='grid grid-rows-2 my-2'>
          <label htmlFor='' className='text-[14px] mb-1'>
            Role
          </label>
          <select
            className='text-[12px] outline-none'
            onChange={(e) => {
              onChange("role", e)
            }}>
            <option defaultChecked>Please select role</option>
            <option value='Roster Lead'>ROSTER LEAD</option>
            <option value='Roster Maker'>ROSTER MAKER</option>
            <option value='Trading Lead'>TRADING LEAD</option>
            <option value='Pre_game Trader'>PRE GAME TRADER</option>
            <option value='In_game Trader'>IN GAME TRADER</option>
          </select>
        </div>
      ) : ModalTitle === "edit" ? (
        <div className='grid grid-rows-2 my-2'>
          <label htmlFor='' className='text-[14px] mb-1'>
            Status
          </label>
          <select
            defaultValue={values?.status}
            className='text-[12px] outline-none'
            onChange={(e) => {
              onChange("status", e)
            }}>
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default PlayersInformations
