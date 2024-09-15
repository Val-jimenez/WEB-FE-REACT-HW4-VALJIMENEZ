const StrategicObjectives = () => {
    const objectives = [
      { id: 1000, goal: 'Expansión de mercado global', target: '10%', progress: '5%', compliance: 50 },
      { id: 1001, goal: 'Mejora de la experiencia del usuario', target: '30%', progress: '10%', compliance: 33 },
      { id: 1002, goal: 'Sostenibilidad en producción', target: '50%', progress: '20%', compliance: 40 },
      { id: 1003, goal: 'Crecimiento del ecosistema de Game Pass', target: '15%', progress: '12%', compliance: 80 },
    ];
  
    const getStatusColor = (compliance) => {
      if (compliance <= 35) return 'text-red-500';
      if (compliance <= 75) return 'text-orange-500';
      return 'text-green-500';
    };
  
    return (
      <section className="p-8 bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">3. Objetivos Estratégicos</h2>
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Código</th>
              <th className="border px-4 py-2">Objetivo</th>
              <th className="border px-4 py-2">Meta</th>
              <th className="border px-4 py-2">Avance</th>
              <th className="border px-4 py-2">Cumplimiento</th>
              <th className="border px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id}>
                <td className="border px-4 py-2">{obj.id}</td>
                <td className="border px-4 py-2">{obj.goal}</td>
                <td className="border px-4 py-2">{obj.target}</td>
                <td className="border px-4 py-2">{obj.progress}</td>
                <td className="border px-4 py-2">{obj.compliance}%</td>
                <td className={`border px-4 py-2 ${getStatusColor(obj.compliance)}`}>
                  {obj.compliance <= 35 ? 'Crítico' : obj.compliance <= 75 ? 'Aceptable' : 'Exitoso'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default StrategicObjectives;
  