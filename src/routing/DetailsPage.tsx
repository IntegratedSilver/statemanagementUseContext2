import { useParams } from "react-router-dom"

const DetailsPage = () => {

  //With this hook we can extract prams values form the URL
  const params = useParams();

  console.log(params)

  return (
 <>
    <p>User</p>
 </>
  )
}

export default DetailsPage