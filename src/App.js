import './App.css';
import { EventsManagement } from './Main/EventsManagement/EventsManagement';
import { FinanceMonitoring } from './Main/FinanceMonitoring/FinanceMonitoring';
import { SalesMonitoring } from './Main/SalesMonitoring/SalesMonitoring';
import { WebsiteAnalytics } from './Main/WebsiteAnalytics/WebsiteAnalytics';
import './Nav.css'
import { Nav } from './Nav/Nav';

function App() {
  return (
    <div className="App">

      {/* <FinanceMonitoring /> */}
      <EventsManagement />
      {/* <SalesMonitoring /> */}
      {/* <WebsiteAnalytics /> */}
    </div>
  );
}

export default App;
