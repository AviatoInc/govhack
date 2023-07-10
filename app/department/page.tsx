import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Barchart } from "@/components/ui/graph"

async function fetchProjects() {
  const res = await fetch("http://localhost:3000/api/department", {
    next: {
      revalidate: 1,
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
      <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle >Sericulture Department</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    
                    <Barchart />
                    <h4>*y axis shows Target No.</h4>
                  </CardContent>
                </Card>
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
        {projects?.map((project: any, idx: number) => (
          <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center" key={idx}>
            {/* Title and Action */}
            <div className="flex items-center my-3 border-gray-50">
              <div className="mr-auto">
                <h2 className="mr-auto font-semibold">Title :  { project.title}</h2>
              </div>
              <Link
                href={`/department/edit/${project.id}`}
                className="px-4 py-1  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
              >
                Edit
              </Link>
            </div>
            {/* Date & Description */}
            <div className="mr-auto my-1  bg-slate-200">
              <blockquote className="font-bold text-slate-700">
                Submitted: {new Date(project.date).toDateString()}
              </blockquote>
            </div>
            <div className=" mr-auto my-3">
              <h2><blockquote className="font-bold text-slate-700">Description : </blockquote>{project.description}</h2>
            </div>
            <div className=" mr-auto my-3">
              <h2><blockquote className="font-bold text-slate-700">Target Fixed : </blockquote>{project.targetFixed}</h2>
            </div>
            <div className=" mr-auto my-3">
              <h2><blockquote className="font-bold text-slate-700">Deadline : </blockquote>{project.deadline}</h2>
            </div>
            <div className=" mr-auto my-3">
              <h2><blockquote className="font-bold text-slate-700">Status : </blockquote>{project.achieved}</h2>
            </div>
          </div>
        ))}
        <h1 className="w-9/12 text-2xl mt-10 font-bold text-slate-700 text-left">About: </h1>
        <p className="w-9/12 text-xl my-3 font--blod text-justify">Sivasagar is one of the major silk producing districts of Assam occupying 
        a prominent place in the Sericulture map of the state by practicing three types of silkworms, viz., 
        Eri, Muga and Mulberry in more than 400 villages in the district. Out of these three silkworms,  
        Eri and Mulberry Silkworms are reared by indoor rearing methods and Muga silkworm is reared on its food plants in outdoor rearing 
        conditions. Sericulture plays a pivotal role in the rural economy of the district. The Department of Sericulture has been providing 
        support consistently through its various programmes/Projects/schemes to the rural people for enhancement of sericultural products.</p>
        <h1 className="w-9/12 text-2xl mt-10 font-bold text-slate-700 text-left">Recent Achievements: </h1>
        <p className="w-9/12 text-xl my-3 font--blod text-justify">Achievements of sericultural activities can be measured through its production of Eri cut cocoons, Muga & Mulberry raw silk, expansion of silkworm food plants and improvement of livelihoods by practicing sericultural activities.  During the last year(2021-22) physical achievement made under Eri, Muga and  Mulberry sector were 73.6 MT Eri cut cocoons (Target 197 MT); Muga raw silk 9.1 MT (Target 10 MT); Mulberry  raw silk 0.72 MT (Target 0.75 MT) respectively. Under Individual Beneficiary Scheme, a total of 100 Nos. beneficiaries have been covered under APART schemes. In the Silkworm food plantation sector, a total of 3 hectare land has been expanded through convergence programme with MGNREGA.</p>
      </div>
    </main>
  );
}