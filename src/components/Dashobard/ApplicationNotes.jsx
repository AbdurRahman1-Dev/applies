import { BiNotepad } from "react-icons/bi";
const ApplicationNotes = ({ notes }) => {
  return (
    <div className="bg-white p-5 rounded-xl mt-8">
      <h4 className="text-2xl text-center font-semibold pb-5 pt-3">
        <BiNotepad className="inline-block me-2 primary-color"></BiNotepad>
        Yor Notes about this Application
      </h4>

      <textarea
        className="textarea w-full h-40 textarea-primary"
        placeholder="Notes"
        defaultValue={notes}
      ></textarea>
    </div>
  );
};

export default ApplicationNotes;
