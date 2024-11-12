import React, { useEffect, useState } from "react";
import Data from "@/shared/Data";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "@/shared/FirebaseConfig";
import Toast from "../Home/Toast";
import { useRouter } from "next/navigation";

function Form() {
  const [inputs, setInputs] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const db = getFirestore(app);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setSubmit(true); // Set submit to true to trigger useEffect 
  };

  const savePost = async () => {
    try {
      await setDoc(doc(db, "posts", Date.now().toString()), inputs);
      setSubmit(false); // Reset submit to prevent repeated saves
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  useEffect(() => {
    if (submit) {
      savePost();
      router.push('/')
    }
  }, [submit]);

  return (
    <div className="mt-4">
      {showToast ? (
        <div className="absolute top-10 right-10">
          <Toast
            msg={"Post Created Successfully"}
            closeToast={() => setShowToast(false)}
          />
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="description"
          className="w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />
        <input
          type="text"
          placeholder="Link"
          name="link"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Image"
          name="image"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;