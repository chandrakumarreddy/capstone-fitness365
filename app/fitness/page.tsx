import React from "react";
import Header from "../_components/Header";
import { Card, Select } from "antd";
import Link from "next/link";
import Create from "./_components/Create";

export default async function Fitness() {
  const response = await fetch(
    "https://capstone-fitness.up.railway.app/api/fitness",
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjlmNzUyZjE2NWNjNmQxZjQyOWQ5YiIsImlhdCI6MTY5NzI0OTExMSwiZXhwIjoxNjk3ODUzOTExfQ.i6yHgIvGOybDC391_pVRDxXeCI2X6ufPdDX0mmaGznk",
      },
    }
  );
  const fitnessTips = await response.json();
  if (response.status !== 200) {
    return <h1>Please login</h1>;
  }
  return (
    <>
      <Header headerStyle="bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <section className="flex items-center justify-between py-6 sticky bg-white top-16 z-10">
          <h3 className="text-3xl font-bold">Best Fitness tips</h3>
          <Create />
        </section>
        <div className="flex flex-col gap-y-6">
          <section className="flex justify-end">
            <Select
              size="large"
              placeholder="Select type"
              style={{ width: 200 }}
              options={[
                {
                  value: "text",
                  label: "Text Tips",
                },
                {
                  value: "video",
                  label: "Video Tips",
                },
              ]}
            />
          </section>
          <section className="grid gap-5 grid-cols-2">
            {fitnessTips?.results.map((item: any) => (
              <div className="grid gap-5" key={item._id}>
                {item.tips.map((tip: any, index: number) => (
                  <Card title={item.name} key={index.toString()}>
                    <p className="mb-2">{tip.short_description}</p>
                    <Link
                      href={`/fitness/${item._id}`}
                      className="block text-right"
                    >
                      Read More
                    </Link>
                  </Card>
                ))}
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
