const Container = (props) => {
  const { children } = props
  return (
    <div className="px-5">
      <div className="max-w-5xl h-full mx-auto">{children}</div>
    </div>
  )
}

export default Container
