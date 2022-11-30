import Formulario from "./Formulario"
import servEntrada from "../../services/entradas"


const AddEntry = ({ user, setVer}) => { 
  const onSubmit = async (values) => { 
    await servEntrada.saveEntrada(values, user.token)
    setVer('lista-entradas')
  }

  return (
    <Formulario funSubmit={onSubmit} defaultValue={{ titulo:'',contenido:'',fechaPub:'2022'}} />
  )
}

export default AddEntry