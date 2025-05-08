// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} font-sans transition-colors duration-500`}>
//       {/* HEADER */}
//       <header className="flex items-center justify-between px-6 py-4 shadow bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <h1 className="text-2xl font-bold flex items-center">
//           💎 <span className="ml-2">SoftSell</span>
//         </h1>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-200 transition"
//         >
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//       </header>

//       {/* HERO SECTION */}
//       <section className="p-16 text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white">
//         <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
//           Sell Your Unused Software Licenses
//         </motion.h1>
//         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 text-lg">
//           Turn your unused tools into cash in minutes.
//         </motion.p>
//         <motion.button whileHover={{ scale: 1.1 }} className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
//           Get a Quote
//         </motion.button>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="p-12 bg-gray-100 dark:bg-gray-800 text-center">
//         <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { icon: '📤', title: 'Upload License', desc: 'Send us your license info' },
//             { icon: '💰', title: 'Get Valuation', desc: 'We’ll evaluate your license' },
//             { icon: '🏦', title: 'Get Paid', desc: 'Instant payout to your account' },
//           ].map((item, idx) => (
//             <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
//               <div className="text-4xl mb-2">{item.icon}</div>
//               <h3 className="text-xl font-medium mb-2">{item.title}</h3>
//               <p>{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="p-12 text-center">
//         <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
//         <div className="grid md:grid-cols-4 gap-6">
//           {['✅ Instant Payouts', '🔒 Safe & Secure', '📞 24/7 Support', '🎯 Trusted by 500+ companies'].map((point, idx) => (
//             <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow">
//               <p>{point}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="p-12 bg-gray-100 dark:bg-gray-800 text-center">
//         <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             { quote: 'Fast, easy, and honest service!', author: 'Jane Doe, CTO, TechCorp' },
//             { quote: 'Highly recommend SoftSell for license resale.', author: 'John Smith, IT Head, BizWare' },
//           ].map((testi, idx) => (
//             <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
//               <p className="italic">"{testi.quote}"</p>
//               <p className="mt-2 text-sm">{testi.author}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT FORM */}
//       <section className="p-12 text-center">
//         <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
//         <form
//           className="max-w-lg mx-auto grid gap-4 text-left"
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert('Form submitted successfully!');
//           }}
//         >
//           <input className="border p-3 rounded" placeholder="Name" required />
//           <input className="border p-3 rounded" placeholder="Email" type="email" required />
//           <input className="border p-3 rounded" placeholder="Company" required />
//           <select className="border p-3 rounded" required>
//             <option value="">Select License Type</option>
//             <option>Microsoft</option>
//             <option>Adobe</option>
//             <option>Other</option>
//           </select>
//           <textarea className="border p-3 rounded" placeholder="Message" rows="3" required />
//           <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './tailwind.css'; // make sure it points to the correct CSS file

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} font-[Poppins] transition-all duration-500`}>
 {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
        <h1 className="text-2xl font-extrabold flex items-center">💎 <span className="ml-2">SoftSell</span></h1>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow hover:bg-gray-200 transition">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="p-16 text-center bg-gradient-to-br from-indigo-600 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Sell Your Unused Software Licenses</h1>
        <p className="mb-6 text-lg">Turn your unused tools into cash in minutes.</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">Get a Quote</button>
      </section>

      {/* HOW IT WORKS */}
      <section className="p-12 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '📤', title: 'Upload License', desc: 'Send us your license info' },
            { icon: '💰', title: 'Get Valuation', desc: 'We’ll evaluate your license' },
            { icon: '🏦', title: 'Get Paid', desc: 'Instant payout to your account' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['✅ Instant Payouts', '🔒 Safe & Secure', '📞 24/7 Support', '🎯 Trusted by 500+ companies'].map((point, idx) => (
            <div key={idx} className="bg-indigo-100 dark:bg-indigo-700 p-4 rounded-2xl shadow hover:shadow-md transition">
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="p-12 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { quote: 'Fast, easy, and honest service!', author: 'Jane Doe, CTO, TechCorp' },
            { quote: 'Highly recommend SoftSell for license resale.', author: 'John Smith, IT Head, BizWare' },
          ].map((testi, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="italic">"{testi.quote}"</p>
              <p className="mt-2 text-sm">{testi.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto grid gap-4 text-left" onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted successfully!');
        }}>
          <input className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition focus:border-indigo-500" placeholder="Name"required />
          <input className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" required />
          <input className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Company" required />
          <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
            <option value="">Select License Type</option>
            <option>Microsoft</option>
            <option>Adobe</option>
            <option>Other</option>
          </select>
          <textarea className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message" rows="3" required />
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Submit
          </button>
        </form>
      </section>
    </div>
    
  );
}

export default App;
