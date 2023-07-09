import Link from "next/link";

async function fetchProjects() {
  const res = await fetch("http://localhost:3000/api/department", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.projects;
}

export default async function Home() {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <main className="w-full h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-slate-800 drop-shadow-xl">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
          Department Scheme and Projects
        </h1>
      </div>
      {/* Link */}
      <div className="flex my-5">
        <Link
          href={"/department/add"}
          className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
        >
          Add New Project 
        </Link>
      </div>
      {/* Projects */}
      <div className="w-full flex  flex-col justify-center items-center">
        {projects?.map((project: any) => (
          <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
            {/* Title and Action */}
            <div className="flex items-center my-3">
              <div className="mr-auto">
                <h2 className="mr-auto font-semibold">{project.title}</h2>
              </div>
              <Link
                href={`/department/edit/${project.id}`}
                className="px-4 py-1  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
              >
                Edit
              </Link>
            </div>
            {/* Date & Description */}
            <div className="mr-auto my-1">
              <blockquote className="font-bold text-slate-700">
                {new Date(project.date).toDateString()}
              </blockquote>
            </div>
            <div className=" mr-auto my-1">
              <h2>{project.description}</h2>
            </div>
            <div className=" mr-auto my-1">
              <h2>{project.targetFixed}</h2>
            </div>
            <div className=" mr-auto my-1">
              <h2>{project.deadline}</h2>
            </div>
            <div className=" mr-auto my-1">
              <h2>{project.achieved}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}