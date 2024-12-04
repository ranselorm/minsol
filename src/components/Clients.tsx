import React from "react";

type ClientType = {
  title?: string;
  image: string;
};

const clients: ClientType[] = [
  {
    title: "Obuasi and Iduaprem (Ghana)",
    image: "c1.jpg",
  },
  {
    title: "Asanko Gold Mine (Ghana)",
    image: "c2.jpg",
  },
  {
    title: "Ayamfuri (Ghana), Sissingue (Cote D’Ivoire)",
    image: "c3.jpg",
  },
  {
    image: "c4.jpg",
  },
  {
    title: "Nsuta (Ghana)",
    image: "c5.png",
  },
  {
    title: "Tarkwa and Damang (Ghana)",
    image: "c6.jpg",
  },
];

const Clients = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-6 w-full items-center justify-center gap-x-6">
          {clients.map((client, index) => (
            <div className="" key={index}>
              <img src={`/client/${client.image}`} className="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
