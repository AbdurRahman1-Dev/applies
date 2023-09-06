import Link from "next/link";
import { BiNotepad } from "react-icons/bi";
const ApplicationNotes = ({ notes }) => {
  return (
    <div className="bg-slate-200 ">
      <div className="bg-white p-5 rounded-xl mt-8">
        <h4 className="text-2xl text-center font-semibold pb-5 pt-3">
          <BiNotepad className="inline-block me-2 primary-color"></BiNotepad>
          Yor Notes about this Application
        </h4>

        <div>
          <p className="text-xl py-3 text-error">
            Have new questions, or wnat to take preparation for interview?
            <Link href={"/dashboard/ai"}>
              <span className="underline primary-color"> Ask Ai.</span>
            </Link>
          </p>
          <textarea
            className="textarea w-full h-40 textarea-primary"
            placeholder="Notes"
            defaultValue={notes}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNotes;
