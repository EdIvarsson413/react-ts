import { ChangeEvent, useState } from "react"

interface Props {
    agregarTarea: ( titulo: string ) => void
}

const FormTarea = ( { agregarTarea }: Props ) => {
    const [ titulo, setTitulo ] = useState('');

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setTitulo( e.target.value );
    }

    const handleSubmit = ( e: ChangeEvent<HTMLFormElement> ) => {
        e.preventDefault();

        // Se eliminan espacios del titulo
        const textoLimpio = titulo.trim();

        // Se verifica si existe el titulo
        if( !textoLimpio ) return

        agregarTarea( titulo );
        setTitulo('');
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="todo"> Tarea
                <input
                    type="text"
                    id="todo"
                    placeholder="Escribe una tarea"
                    value={titulo}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Agregar tarea</button>
        </form>
    )
}

export default FormTarea