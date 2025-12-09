
export const ProductFromUI = ({
    producto,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    return (
        <section>
            {/*html for. decidir que hacer*/}
            <form className="CLASS" onSubmit={onSubmit}>
                <h2>Agregar producto</h2>
                <div>
                    <label >Nombre:</label>
                    <input type="text" name="nombre" value={producto.nombre} onChange={onChange}  >

                    </input>
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>
                <div>
                    <label >Precio:</label>
                    <input type="number" name="precio" value={producto.precio} onChange={onChange} required>
                    </input>
                    {errors.precio && <p className="error">{errors.precio}</p>}
                </div>
                <div>
                    <label >Categoria:</label>
                    <input type="text" name="categoria" value={producto.categoria} onChange={onChange} required>
                
                    </input>
                    {errors.categoria && <p className="error">{errors.categoria}</p>}
                </div>
                <div>
                    <label >Descripcion:</label>
                    <textarea type="text" name="descripcion" value={producto.descripcion} onChange={onChange} required>

                    </textarea>
                </div>
                <div>
                    <label >Imagen:</label>
                    <input type="file" accept="image/*" onChange={(e) => {
                        onFileChange(e.target.files?.[0] ?? null);
                    }}/>
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </section>
    )
}