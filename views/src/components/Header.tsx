export const Header = () => {
  const handleModeButtonClick = (): void => {
    const body = document.querySelector('.container')
    body?.classList.toggle('dark')
  }

  return (
    <div className="app-header">
      <h1>Lista de notas</h1>
      <button onClick={handleModeButtonClick}>NOTURNO/DIURNO</button>
    </div>
  )
}
