import React from "react";
import Header from "./components/UI/Header";
import Footer from './components/UI/Footer';
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Header headerText={'Kalkulator akcyzy samochodowej'} />
      <main className="mb-5 font-sans">
        <section className="flex flex-col h-full">
          <div className="container mx-auto flex flex-col px-6 z-20 mt-6">
            <div>
              <h2>Oblicz akcyze za sprowadzony samochód na podstawie wprowadzonych danych.</h2>
              <p>Wypełnij poprawnie formularz aby obliczyć akcyze na sprowadzony przez siebie samochód. Stawki akcyzy na samochód zostały określone w art.105 ustawy o podatku akcyzowym. Są uzależnione od pojemności silnika auta i wynoszą:</p>
              <div className="container mx-auto px-8">
                <ul className="list-disc italic font-extralight">
                  <li>3,1% wartości pojazdu w przypadku samochodów z silnikiem o pojemności do 2000 cm3,</li>
                  <li>18,6% wartości pojazdu w przypadku pojazdów z silnikiem powyżej 2000 cm3.</li>
                </ul>
              </div>
              <p>Obecnie obowiązują również preferencyjne stawki akcyzy niższe o 50% dla właścicieli hybryd:</p>
              <div className="container mx-auto px-8">
                <ul className="list-disc italic font-extralight">
                  <li>9,3% wartości samochodu w przypadku klasycznych hybryd (HEV – bez możliwości ładowania z gniazdka, czyli zewnętrznego źródła prądu) oraz miękkich hybryd (MHEV), wyposażonych w silnik spalinowy powyżej 2000 cm3, ale nie wyższy niż 3500 cm3,</li>
                  <li>9,3% wartości samochodu w przypadku hybryd plug-in (PHEV – z możliwością ładowania z gniazdka, czyli zewnętrznego źródła prądu), wyposażonych w silnik spalinowy powyżej 2000 cm3, ale nie wyższy niż 3500 cm3,</li>
                  <li>1,55% wartości samochodu w przypadku klasycznych hybryd (HEV – bez możliwości ładowania z gniazdka, czyli zewnętrznego źródła prądu) oraz miękkich hybryd (MHEV), wyposażonych w silnik spalinowy do 2000 cm3.</li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto px-8">
              <Form />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
