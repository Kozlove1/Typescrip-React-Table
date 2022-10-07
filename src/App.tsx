import Table  from './components/Table'
import data from './data.json'

export default function App() {
  return (
    <div className="App">
      <Table
        goods={data}
      />
    </div>
  );
      }