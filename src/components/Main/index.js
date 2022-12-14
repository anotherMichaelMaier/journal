import "./Main.css";
export function Main() {
  return (
    <>
      <h2> NEW ENTRY</h2>
      <form>
        <label htmlFor="motto">Motto</label>
        <input type="text" id="motto" />
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
        <button type="button" className="button">
          Create
        </button>
      </form>
    </>
  );
}
