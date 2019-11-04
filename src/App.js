import React from 'react';


function App() {
  return (
    <body>
      <header>Sally's Student Resume</header>
      <main>
          <section>
              <h1>Sally Redmonds</h1>
              <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" width="200" height="300" alt="Sally Redmonds" />
          </section>
          
          <section className='edu'>
            <h2>Education</h2>
            <ul className='his'>
              <li>Santa Rosa Junior College</li>
              <li>Sonoma State University</li>
            </ul>
          </section>
          
          <section className='emp'>
            <h2>Employment History</h2>
            <ul className='his'>
              <li>Sur La Table<br />
              Kitchen Assistant<br/>
              May 2014 - July 2017</li>
              <li>Nordstrom Rack<br />
              Sales Associate<br />
              July 2017 - Current</li>
            </ul>
          </section>
          
          <section className='con'>
            <p className='contact'>
              <strong>Contact Sally At:</strong>
            </p>
            <address className='his'>
              <a href='mailto:sallyred@gmail.com'> sallyred@gmail.com </a>
              <br />
              <a href ='tel: 12348369403'>(234) 836-9403</a>
            </address>
          </section>
        </main>
    </body>
  );
}

export default App;