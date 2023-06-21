import { Tarea } from "../App"

interface Props {
    tarea: Tarea,
    cumplirTarea: ( tareaSeleccionada: Tarea ) => void,
    eliminarTarea: ( tareaSeleccionada: Tarea ) => void
}

const TareaItem = ({ tarea, cumplirTarea, eliminarTarea }: Props) => {
    return (
        <article>
            <label htmlFor="tarea">
                <input
                    id="tarea"
                    type="checkbox"
                    checked={tarea.completo}
                    onChange={() => cumplirTarea(tarea)}
                />
                {tarea.titulo}
            </label>
            <button
                type="button"
                onClick={() => eliminarTarea(tarea)}
                className="contrast outline"
            >
                Eliminar
            </button>
        </article>
    )
}

export default TareaItem