"use client"


import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Raising 1 Acre Som Plantation to each Muga farmers",
    total: 42,
  },
  {
    name: "Assistance to Adopted Seed (Muga) Rearers",
    total: 30,
  },
  {
    name: "Assistance to Pvt. Muga Grainure",
    total: 33,
  },
  {
    name: "Udayan",
    total: 20,
  },
  
]

export function Barchart() {
  return (
    
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[1, 1, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}