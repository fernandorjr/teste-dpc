import './style.css'
export default function PageTitle({title}){
  return(
    <div className="border-bottom" id="page-title">
      <h1>{title}</h1>
    </div>
  )
}