import PassingProps from './PassingProps'

function PassingPropsHandler() {
  return (
    <div>
      <PassingProps
          text={{name: "Luke", id: "123xyG"}}
          size={40}
        />
    </div>
  )
}

export default PassingPropsHandler