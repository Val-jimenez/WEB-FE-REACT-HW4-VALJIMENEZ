import Header from './components/Header';
import Introduction from './components/Introduction';
import Diagnosis from './components/Diagnosis';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import StrategicObjectives from './components/StrategicObjectives';
import Footer from './components/Footer';


const App = () => {
  const diagnosisData = [];
  const objectivesData = [];

  return (
    <div>
      <Header />
      <Introduction />
      <Diagnosis data={diagnosisData} />
      <OrganizationalIdentity />
      <StrategicObjectives objectives={objectivesData} />
      <Footer />
    </div>
  );
};

export default App;

