"use client";

import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
type UpdateProjectParams = {
  title: string;
  description: string;
  targetFixed: string;
  deadline: string;
  achieved: string;
  id: string;
};
const updateProject = async (data: UpdateProjectParams) => {
  const res = fetch(`http://localhost:3000/api/department/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ title: data.title, description: data.description , targetFixed: data.targetFixed, deadline: data.deadline, achieved:data.achieved }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const deleteProject = async (id: string) => {
  const res = fetch(`http://localhost:3000/api/department/${id}`, {
    method: "DELETE",
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const getProjectById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/department/${id}`);
  const data = await res.json();
  return data.project;
};

const EditProject = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const targetFixedRef = useRef<HTMLTextAreaElement | null>(null);
  const deadlineRef = useRef<HTMLTextAreaElement | null>(null);
  const achievedRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    toast.loading("Fetching Project Details ", { id: "1" });
    getProjectById(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current  && targetFixedRef.current && deadlineRef.current && achievedRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
          targetFixedRef.current.value = data.targetFixed;
          deadlineRef.current.value = data.deadline;
          achievedRef.current.value = data.achieved;
          toast.success("Fetching Complete", { id: "1" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching Project", { id: "1" });
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current && targetFixedRef.current && deadlineRef.current && achievedRef.current) {
      toast.loading("Sending Request ", { id: "1" });
      await updateProject({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        targetFixed: targetFixedRef.current?.value,
        deadline: deadlineRef.current?.value,
        achieved: achievedRef.current?.value,
        id: params.id,
      });
      toast.success("Project Posted Successfully", { id: "1" });
      await router.push("/department");
    }
  };
  const handleDelete = async () => {
    toast.loading("Deleting Project", { id: "2" });
    await deleteProject(params.id);
    toast.success("Project Deleted", { id: "2" });
    router.push("/department");
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-900 font-bold p-3">
            Edit Your Project Data
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="Enter Title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 "
            />
            <textarea
              ref={descriptionRef}
              placeholder="Enter Description"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={targetFixedRef}
              placeholder="Enter Target"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={deadlineRef}
              placeholder="Enter Deadline"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <textarea
              ref={achievedRef}
              placeholder="Enter Status"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            
            <div className="flex justify-between">
              <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
                Update
              </button>
            </div>
          </form>
          <button
            onClick={handleDelete}
            className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg  m-auto mt-2 hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProject;