import { Tarea } from "../App"
import TareaItem from "./TareaItem"

// Estructura de los Props (se impota la interface de la tarea)
interface Props {
    tareas: Tarea[],
    cumplirTarea: ( tareaSeleccionada: Tarea) => void,
    eliminarTarea: ( tareaSeleccionada: Tarea) => void,
}

const Tareas = ( { tareas, cumplirTarea, eliminarTarea }: Props ) => {
    return (
        <>
            {   // Se verifica si hay tareas
                tareas.length === 0 ? (
                    <h3>No hay tareas</h3>
                ) : (
                    tareas.map(tarea => (
                        <TareaItem 
                            key={tarea.id}
                            tarea={tarea}
                            cumplirTarea={cumplirTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    ))
                )
            }
        </>
    )
}

export default Tareas