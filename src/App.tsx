import { useState } from "react"
import FormTarea from "./components/FormTarea";
import Tareas from "./components/Tareas";

// Estructurar una tarea con TS, tambien se puede exportar para no copiar y pegar en otros archivos
export interface Tarea {
  id: number,
  titulo: string,
  completo: boolean
}

// Tareas incializadas
const tareasIncio = [
  {
    id: 1,
    titulo: "Aprender TS",
    completo: true,
  },
  {
    id: 2,
    titulo: "Aplicar TS con React",
    completo: false,
  },
  {
    id: 3,
    titulo: "Reforzar Vue",
    completo: true,
  },
]

const App = () => {
  // Se le indica al state la interface a usar para evitar otro tipo de datos en el arreglo
  const [ tareas, setTareas ] = useState<Tarea[]>(tareasIncio);

  // Se especifica el tipo de dato del parametro
  const agregarTarea = ( titulo: string ) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo,
      completo: false
    }

    // Se mete al arreglo una copia del original junto con la nueva tarea
    setTareas( [ ...tareas, nuevaTarea ] );
  }

  // Cuando se cumpla una tarea cambiara el nput
  const cumplirTarea = ( tareaSeleccionada: Tarea) => {
    // De un solo paso se cambia el estado y de este se obtienen las tareas
    setTareas( prevTareas => {
      // Se recorren las tareas y hasta que encuentre la tarea que coincida cabiara el boolean o si no retorna la tarea que 
      // no coincida
      return prevTareas.map( tarea => tarea === tareaSeleccionada? {...tarea, completo: !tarea.completo} : tarea )
    });
  }

  // Eliminar tarea
  const eliminarTarea = ( tareaSeleccionada: Tarea ) => {
    // De un solo paso se cambia el estado y de este se obtienen las tareas
    setTareas( prevTareas => {
      // Se recorren las tareas y en lugar de editar el objeto lo saca con el metodo filter
      return prevTareas.filter( tarea => tarea !== tareaSeleccionada );
    });
  }

  return (
    <div className="container">
      {/* Con Pico CSS casi no es necesario usar clases ya que todos los estilos se aplican directamente a
          las etiquetas de HTML 
      */}
      <h1>TAREAS</h1>

      {/* Form para agregar una tarea  */}
      <FormTarea agregarTarea={agregarTarea}/>

      <div>
        <Tareas 
          tareas={tareas} 
          cumplirTarea={cumplirTarea} 
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App