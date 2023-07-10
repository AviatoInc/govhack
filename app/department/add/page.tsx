"use client";

import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const postProject = async ({
  title,
  description,
  targetFixed,
  deadline,
  achieved
}: {
  title: string;
  description: string;
  targetFixed: string;
  deadline: string;
  achieved: string;
}) => {
  const res = fetch("http://localhost:3000/api/department", {
    method: "POST",
    body: JSON.stringify({ title, description, targetFixed ,deadline, achieved }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const AddProject = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const targetFixedRef = useRef<HTMLTextAreaElement | null>(null);
  const deadlineRef = useRef<HTMLTextAreaElement | null>(null);
  const achievedRef = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current && targetFixedRef.current && deadlineRef.current && achievedRef.current) {
      toast.loading("Sending Request 🚀", { id: "1" });
      await postProject({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        targetFixed: targetFixedRef.current?.value,
        deadline: deadlineRef.current?.value,
        achieved: achievedRef.current?.value,
      });
      toast.success("Project Posted Successfully", { id: "1" });
      router.push("/department");
    }
  };
  return (
    <Fragment>
      <Toaster />
      
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-900 font-bold p-3">
            Add New Project/Scheme
          </p>
          <form onSubmit={handleSubmit}>
          
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
                ref={titleRef}
                placeholder="Scheme/Project Name"
                type="text"
                className=" bg-slate-100 rounded-md px-4 w-full py-2 my-2 "
                />

          </div>
            
            
            <textarea
              ref={descriptionRef}
              placeholder="Scheme/Project Description"
              className="bg-slate-100 rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={targetFixedRef}
              placeholder="Scheme/Project Fixed Target(only Integer)"
              className="bg-slate-100 rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={deadlineRef}
              placeholder="Scheme/Project Deadline"
              className="bg-slate-100 rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={achievedRef}
              placeholder="Scheme/Project Achieved Status"
              className="bg-slate-100 rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProject;