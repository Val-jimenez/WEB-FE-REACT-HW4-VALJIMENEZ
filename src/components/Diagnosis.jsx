const Diagnosis = () => {
    const data = [
      { id: 1, type: "Debilidades", items: [
        { id: 1, description: "Precio elevado en comparación con otros controles de juego." },
        { id: 2, description: "Algunos usuarios reportan desgaste prematuro de los joysticks." },
        { id: 3, description: "No incluye un sistema de carga rápida para la batería." },
      ]},
      { id: 2, type: "Oportunidades", items: [
        { id: 1, description: "Creciente mercado de eSports y jugadores competitivos que demandan personalización." },
        { id: 2, description: "Expansión hacia compatibilidad completa con plataformas de PC y móviles." },
        { id: 3, description: "Nuevas tecnologías de retroalimentación háptica podrían mejorar el control." },
      ]},
      { id: 3, type: "Fortalezas", items: [
        { id: 1, description: "Palancas de mando y botones completamente personalizables." },
        { id: 2, description: "Construcción robusta con materiales de alta calidad." },
        { id: 3, description: "Batería de larga duración de hasta 40 horas." },
      ]},
      { id: 4, type: "Amenazas", items: [
        { id: 1, description: "Competencia creciente de otras marcas que ofrecen controles de alta calidad a menor precio." },
        { id: 2, description: "Posibles problemas de escasez de componentes electrónicos." },
        { id: 3, description: "Críticas por el alto costo pueden disuadir a potenciales compradores." },
      ]}
    ];
  
    return (
      <section className="p-4 sm:p-8 bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">1. Diagnóstico Actual</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {data.map((section) => (
            <div key={section.id} className="border p-4 bg-[#2b525d] rounded-lg">
              <h3 className="font-bold mb-2 text-lg">{section.type}</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.items.map((item) => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Diagnosis;
  