import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;

export const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const ContactInfo = styled.div`
  width: 48%;

  h2 {
    font-weight: 600;
    text-align: left;
    font-size: 2rem;
  }

  p {
    font-weight: 300;
    font-size: 1.3rem;
    text-align: justify;
    overflow: hidden;
    margin-right: 0; /* Ubah nilai margin-right menjadi 0 */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Batasi jumlah baris */
    -webkit-box-orient: vertical;
    line-height: 1.5em; /* Sesuaikan tinggi baris */
    max-height: 4.5em; /* Sesuaikan tinggi maksimum berdasarkan tinggi baris dan jumlah baris */
  }
`;

export const ContactFormWrapper = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size:2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 207%; /* Ubah lebar form menjadi 100% */
  }

  .form-row {
    display: flex;
    flex-direction: row; /* Pastikan ini adalah flex-direction row */
    gap: 10px; /* Memberikan jarak antara input nama dan email */
    margin-bottom: 10px; /* Memberikan jarak bawah */
  }

  .form-row input {
    flex: 1; /* Memastikan kedua input memiliki lebar yang sama */
    font-size: 1.3rem;
  }

  input,
  textarea {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1.4rem;
    font-family: inter;
  }

  textarea {
    margin-bottom: 10px;
  }

  button {
    padding: 5px;
    background-color: #165B15;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.3rem;
    align-self: flex-start;
    width: 100px;
  
    &:hover {
      background-color: green;
    }
  }
`;

export const GoogleMaps = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }
`;