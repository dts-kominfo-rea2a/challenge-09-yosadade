// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "../src/data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="contact-app">
      <Header />
      <Contact data={contacts[0]} />
      <Contact data={contacts[1]} />
      <Contact data={contacts[2]} />
      <Contact data={contacts[3]} />
      <Contact data={contacts[4]} />
      <Contact data={contacts[5]} />
    </div>
  );
};

export default App;
