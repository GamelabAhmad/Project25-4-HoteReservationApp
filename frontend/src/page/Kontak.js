import React from 'react';
import { 
  Main, 
  ContactSection, 
  ContactInfo, 
  ContactFormWrapper, 
  ContactForm, 
  GoogleMaps, 
} from '../component/StyledKontak';
 
function Kontak() {
  return (
    <div className="Kontak">
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h1 style={{ marginTop: '20px', fontSize: '3rem', display: 'inline-block', borderBottom: '4px solid black'}}>Kontak</h1>
      </div>
      <Main>
        <ContactSection>
          <ContactInfo>
            <h2>Kontak Informasi</h2>
            <p>Butuh bantuan? Jangan ragu untuk menghubungi kami! Tim kami siap membantu Anda dengan pertanyaan, saran, atau masukan apa pun yang Anda miliki.</p>
            <ContactFormWrapper>
              <ContactForm>
                <h2>Form Pengaduan</h2>
                <form>
                  <div className="form-row">
                    <input type="text" placeholder="Nama" required />
                    <input type="email" placeholder="Email" required />
                  </div>
                  <textarea rows="4" placeholder="Pesan" required></textarea>
                  <button type="submit">Kirim</button>
                </form>
              </ContactForm>
            </ContactFormWrapper>
          </ContactInfo>
          <GoogleMaps>
            <h2>Google Maps</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192594449917!2d-122.4194154846819!3d37.77492977975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6d44b59%3A0xe27b2e03a6df0d14!2sCity%20Hall%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2s!4v1620300446548!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </GoogleMaps>
        </ContactSection>
      </Main>
    </div>
  );
}

export default Kontak;