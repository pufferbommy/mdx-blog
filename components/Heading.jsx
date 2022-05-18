const Heading = ({ str, hasPinkColor }) => {
  return (
    <h1
      className={`text--3xl md:text-4xl font-bold ${
        hasPinkColor && 'text-pink-400'
      }`}
    >
      {str}
    </h1>
  )
}

export default Heading
