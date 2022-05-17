const Container = (props) => {
  const { children } = props
  return <div className="max-w-5xl h-full mx-auto">{children}</div>
}

export default Container
